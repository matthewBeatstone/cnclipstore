import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const init_user = {
  user: null
};

const reducer = (state = init_user, action) => {
  switch (action.type) {

    case 'LOAD_USER':
        return {user: action.user}
    }
    return state
  }

const store = createStore(reducer)


function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Provider>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
