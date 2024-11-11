from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def create_app():
    return app


@app.route('/')
def hello_world():
    return jsonify({'message': 'Hello from Flask!'})


