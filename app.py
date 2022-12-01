from flask import Flask, request, send_from_directory, render_template
from netsquid import I, Z
import netsquid.qubits as nq
import time

### flask init
app = Flask(__name__)

### netsquid init
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

### game engine api
@app.route("/")
@app.route('/', methods=['GET'])
def main_page():
    return render_template('index.html')

@app.route("/mario")
def game_page():
    return render_template('mario.html')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/img/<path:path>')
def send_img(path):
    return send_from_directory('img', path)

@app.route('/fonts/<path:path>')
def send_ttf(path):
    return send_from_directory('fonts', path)

@app.route('/sng/<path:path>')
def send_sng(path):
    return send_from_directory('sng', path)



### qubit api
# returns two entangled qubits
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
    if operator in ops.keys() and qubitID in qubitdb.keys():
        q1, q2 = qubitdb[qubitID]
        nq.operate(q1, ops[operator])
        a = nq.measure(q1)
        b = nq.measure(q2)
        return str(a[0]) + str(b[0])
    return "BadRequest"
