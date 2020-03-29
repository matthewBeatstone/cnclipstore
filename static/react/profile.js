'use strict';

const e = React.createElement;


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return 'my profile'
  }
}

const domContainer = document.querySelector('#profile')
ReactDOM.render(e(Profile), domContainer);
