from flask import *
from db import Db
from flask_cors import CORS

db = Db()
app = Flask(__name__)
CORS(app)

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.json:
        email = request.json['email']
        password = request.json['password']
        first_name = request.json['first_name']
        last_name = request.json['last_name']

        if db.exist_user(email):
            print('user already exist')
        else:
            user = {
                    'email': email,
                    'first_name': first_name,
                    'last_name': last_name
                    }
            db.add_user(user, password)
            print('signed up')
    

    return render_template('signup.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
   
    if request.json:
        email = request.json['email']
        password = request.json['password']
        print(email, password)

        if db.login(email, password):
            print('Logged In')
            user = db.get_user(email)
            return jsonify(status=201, user=user)

        else:
            print ('wrong email or password')
            return jsonify(status=401)   

    return jsonify(status=200)


if __name__ == '__main__':
    app.run(debug=True)
