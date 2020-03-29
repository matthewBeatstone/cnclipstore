from flask import *
from db import Db

db = Db()
app = Flask(__name__)

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.form:
        email = request.form['email']
        password = request.form['password']
        first_name = request.form['first_name']
        last_name = request.form['last_name']

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
   
    if request.form:
        email = request.form['email']
        password = request.form['password']

        if db.login(email, password):
            print('Logged In')
            return redirect(url_for('home'))
        else:
            print ('wrong email or password')

    
    return render_template('login.html')

@app.route('/home', methods=['POST', 'GET'])
def home():

    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True)
