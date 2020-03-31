import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';


function mapStateToProps(state){
  return{
    user: state.user
  }
}

class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.user)
    return(
      <Typography> home </Typography>
    )
  }
}


export default connect(mapStateToProps)(Home)
