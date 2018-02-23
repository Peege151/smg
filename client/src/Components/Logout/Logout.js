import React, { Component } from 'react';
import UserActions from '../../Actions/UserActions.js'

class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }
    
    componentWillMount(){
      console.log('LOGOUT', this.props)
      UserActions.logout()
      .then(() => {
        this.props.clearToken()
        this.props.history.push('/')
      })
    }

    render() {
      return (
        <div>
          Logging Out...
        </div>
      );
    }
}
export default Footer;
