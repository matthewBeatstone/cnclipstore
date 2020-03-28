#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Fri May 10 01:30:09 2019

@author: matteo
"""

import pymongo
from werkzeug.security import generate_password_hash, \
    check_password_hash


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












