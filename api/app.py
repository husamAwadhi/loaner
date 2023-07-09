from flask import Flask, jsonify
from flask_cors import CORS
from loaner.action.initiateLoan import InitiateLoan
from werkzeug.exceptions import HTTPException

app = Flask(__name__)
CORS(app)

@app.errorhandler(Exception)
def handle_exception(e):
    if isinstance(e, HTTPException):
        return jsonify(error=str(e)), e.code
    return jsonify(error=str(e)), 500

@app.route('/new', methods=['POST'])
def new():
    init = InitiateLoan()
    return init.action()
