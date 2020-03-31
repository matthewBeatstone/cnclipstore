import pymongo
from werkzeug.security import generate_password_hash, \
    check_password_hash

import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)



client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["Crystal_db"]
users_collection = db["users"]


class Db():

    def add_user(self, user_data, password):  #type(user_data) --> dict
        password = generate_password_hash(password)
        user_data['password'] = password
        users_collection.insert_one(user_data)

    def exist_user(self,email):
        try:
            if (users_collection.find_one({'email': email})):
                return True
            else:
                return False
        except:
            return None

    def login(self, email, password):
        query = {'email': email}
        try:
            user = users_collection.find_one(query)
            return check_password_hash(user['password'], password)

        except:
            return False

    def get_user(self, email):
        query = {'email': email}
        user = users_collection.find_one(query)
        return JSONEncoder().encode(user)












