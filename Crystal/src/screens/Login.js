import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



const container = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
}


const card = {
    Width: 500,
    height: 500,
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
};


function mapStateToProps(state){
  return{
    user: state.user
  }
}


function mapDispatchToProps(dispatch){
  return{
    load_user: (user) => dispatch({type: 'LOAD_USER', user: user})
  }
}


class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '' ,
      password: ''
    }
  }

  login() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email: this.state.email, password: this.state.password})
      };
      fetch('http://127.0.0.1:5000/login', requestOptions)
          .then(response => response.json())
          .then(responseJson => {
            if(responseJson.status === 201){
              this.props.load_user(responseJson.user)
              this.props.history.push('/home')
            }
          })
  }


  render(){
    return (
      <Card style={card}>
        <CardContent>
          <Typography style={title} color="textSecondary" gutterBottom>
          </Typography>
          <Typography variant="h5" component="h2">
            Sign In
          </Typography>
          <Typography style={subtitle} color="textSecondary">
            to your addiction
          </Typography>
              <form className={emailForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300, marginBottom: 50}}
                  id="standard-basic"
                  label="email"
                  color="secondary"
                  type='email'
                  value={this.state.email}
                  onChange={(email)=> this.setState({email:email.target.value})}/>
              </form>
              <form className={passwordForm} noValidate autoComplete="off">
                <TextField
                  style={{width: 300}}
                  id="standard-basic"
                  label="password"
                  color="secondary"
                  type='password'
                  value={this.state.password}
                  onChange={(password) => this.setState({password:password.target.value})}/>
              </form>
              <Button style={button} variant="contained" color="secondary" onClick={this.login.bind(this)}>
                Log in
              </Button>
              <Typography style={{marginTop:20}} color="textSecondary">
                Don't have an account?
              </Typography>
              <Link to="signup"> Signup </Link>
        </CardContent>
      </Card>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
