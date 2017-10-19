import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: undefined,
      token: undefined,
      confirm: undefined,
      serverError: undefined,
    }
  }
  componentDidMount(){
    this.setState({token: window.location.search.split('?token=')[1]})
  }
  handleClick(){
    console.log('State Going Up', this.state );
    if (this.state.password !== this.state.confirm ) {
      console.log('Passwords Do Not Match');
      this.setState({serverError: 'Passwords Do Not Match'});
      return;
    }
    fetch('http://localhost:3001/api/users/reset',
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({password: this.state.password, token: this.state.token}),
        headers: { "Content-Type": "application/json" }}
    )
    .then( response => {
      if (!response.ok) {
        console.log('response', response)
        throw Error(response.statusText);
      }
      return response;
    })
    .then( response => {
      console.log('response', response);
      this.props.history.push('/');
    })
    .catch( err => {
      this.setState({ serverError: err.message })
    })
  }

  changeConfirm(e){
    this.setState({confirm: e.target.value})
  }

  changePassword(e){
    this.setState({password: e.target.value})
  }
  render() {
    return (
      <div className={css(styles.outerWrapper)}>
        <div className={css(styles.overlay)}> </div>
        <div className={css(styles.resetPasswordWrapper)}>
          <div className={css(styles.resetPasswordHeader)}></div>
          <div className={css(styles.formContainer)}>
            <div className={css(styles.inputWrappers)}>
              <input
                onChange={this.changePassword.bind(this)}
                placeholder='Password'
                type='password'
                className={css(styles.input)}/>
              <input
                onChange={this.changeConfirm.bind(this)}
                placeholder='Confirm Password'
                type='password'
                className={css(styles.input)}/>
              <button onClick={this.handleClick.bind(this)}className={css(styles.resetPasswordButton)}> Reset Password </button>
              <div className={css(styles.serverError)}> { this.state.serverError } </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPassword;
