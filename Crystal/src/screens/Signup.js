import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'


const container = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
}


const card = {
    Width: 500,
    height: 700,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
};
const title = {
    fontSize: 14,
};
const subtitle = {
    marginBottom: 50,
};
const emailForm = {
  width: 400,
}
const passwordForm = {
  width: 400,
};

const button = {
  width: 300,
  height: 60,
  borderRadius: 30,
  marginTop: 50
}


export default class Signup extends Component {

  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '' ,
      password: '',
      repetePassword:''
    }
  }

  login() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          })
      };
      fetch('http://127.0.0.1:5000/signup', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
  }


  render(){
    return (
      <Card style={card}>
        <CardContent>
          <Typography style={title} color="textSecondary" gutterBottom>
          </Typography>
          <Typography variant="h5" component="h2">
            Sign Up
          </Typography>
          <Typography style={subtitle} color="textSecondary">
            to your new addiction
          </Typography>
              <form className={emailForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300, marginBottom: 30}}
                  id="standard-basic"
                  label="First Name"
                  color="secondary"
                  value={this.state.firstName}
                  onChange={(firstName)=> this.setState({firstName:firstName.target.value})}/>
              </form>
              <form className={passwordForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300, marginBottom: 30}}
                  id="standard-basic"
                  label="Last Name"
                  color="secondary"
                  value={this.state.lastName}
                  onChange={(lastName) => this.setState({lastName:lastName.target.value})}/>
              </form>
              <form className={passwordForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300, marginBottom: 30}}
                  id="standard-basic"
                  label="email"
                  color="secondary"
                  type='email'
                  value={this.state.email}
                  onChange={(email)=> this.setState({email:email.target.value})}/>
              </form>
              <form className={passwordForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300, marginBottom: 30}}
                  id="standard-basic"
                  label="password"
                  color="secondary"
                  type='password'
                  value={this.state.password}
                  onChange={(password) => this.setState({password:password.target.value})}/>
              </form>
              <form className={passwordForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300}}
                  id="standard-basic"
                  label="Repete Password"
                  color="secondary"
                  type='password'
                  value={this.state.repetePassword}
                  onChange={(repetePassword) => this.setState({repetePassword:repetePassword.target.value})}/>
              </form>
              <Button style={button} variant="contained" color="secondary" onClick={this.login.bind(this)}>
                Sign Up
              </Button>
              <Typography style={{marginTop:20}} color="textSecondary">
                Already have an account?
              </Typography>
              <Link to="login"> Sign in </Link>


        </CardContent>
      </Card>
    );
  }
}
