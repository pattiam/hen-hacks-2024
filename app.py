from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return '<h1>Hello, World :D!</h1>'

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.get_json()
    user_message = data['message']
    client = OpenAI()
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message + "don't give an answer. Just explain how to do it."}]
    )
    response = chat_completion.choices[0].message.content
    return response

if __name__ == '__main__':
    app.run(debug=True)
