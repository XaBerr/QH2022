from flask import Flask
from netsquid import I, Z
import netsquid.qubits as nq
import time

app = Flask(__name__)
qubitdb = dict()
# define valid operators
U = (I + Z) / 2
D = (I - Z) / 2
ops = {
    'U':U,
    'D':D,
}
def getTimeTag():
    return str(int(time.time() * 1000000))

# returns two entangled qubits
@app.route("/")
@app.route("/api/generate_entangled")
def generate_entangled():
    timestamp = getTimeTag()
    # generates 2 |0> qubits
    qubits = nq.create_qubits(2)
    # Not second bit
    nq.operate(qubits[1], ns.X)
    # Entangle
    nq.operate(qubits, ns.CNOT)
    qubitdb[timestamp] = qubits
    return timestamp

@app.route("/api/get_qubit/<qubitID>")
def get_qubit(qubitID):
    return str(qubitdb[qubitID])

@app.route("/api/measure/<qubitID>/<operator>")
def measure_qubit(qubitID, operator):
    q1, q2= qubitdb[qubitID]
    if operator in ops.keys() and qubitID in qubitdb.keys():
        nq.operate(q1, ops[operator])
        a = nq.measure(q1)
        b = nq.measure(q2)
        return str(a[0]) + str(b[0])
    return "BadRequest"

