from flask import Flask, request, send_from_directory, render_template

app = Flask(__name__)


@app.route("/")
@app.route('/', methods=['GET'])
def main_page():
    return render_template('index.html')


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
def send_mp3(path):
    return send_from_directory('sng', path)


@app.route('/sng/<path:path>')
def send_sng(path):
    return send_from_directory('sng', path)
