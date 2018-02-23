import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';

function handleErrors(response) {
  console.log('Handle Errors', response);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        action: 'login',
        email: undefined,
        password: undefined,
        confirm: undefined,
        clientError: null,
      }
    }

    componentWillMount(){
      if(this.props.location.state && this.props.location.state.action === 'signup') this.changeAction('signup');
    }

    setErr = (err) => { this.setState({clientError: err }) }

    changeAction(action){
      this.setState({action: action, clientError: undefined})
    }

    getButtonText = () => {
      if(this.state.action === 'login') return 'Log In';
      if(this.state.action === 'signup') return 'Sign Up';
      if(this.state.action === 'forgot') return 'Retrieve'
    }

    changeField(field, event){
      var stateObject = function() {
        let returnObj = {};
        returnObj[field] = this.target.value;
           return returnObj;
      }.bind(event)();
      this.setState( stateObject, () => console.log('Updated State', this.state) )
    }

    validateData = () => {
      let valid = true
      if (this.state.confirm !== this.state.password){
        this.setState({clientError: 'Passwords do Not Match'})
        valid = false;
      }
      if (this.state.password.length < 6){
        this.setState({clientError: 'Your Password Kinda Sucks. Can You Make It Longer? K Thx.'})
        valid = false;
      }
      return valid;
    }

    resetForm = () => {
      let email = '', password = '', confirm = '';
      this.setState({ email, password, confirm });
    }

    handleClick(){
      console.log('props in handle click', this.props)
      let body = {email: this.state.email, password: this.state.password, confirm: this.state.confirm}
      let referrer = this.props.location.state ? this.props.location.state.referrer : '/'
      if( this.state.action === 'login' ){
        return this.props.login(body)
        .then(data => {
          this.resetForm()
          this.props.history.push(referrer);
        })
        .catch(err => this.setErr(err)) // TODO
      }
      if (this.state.action === 'signup') {
        let valid = this.validateData()
        if (valid) {
          this.props.signup(body, referrer)
          .then(data => {
            this.resetForm();
            this.props.history.push(referrer);
          })
          .catch(err => this.setErr(err)) // TODO
        }
      }
      if (this.state.action === 'forgot'){
        this.props.requestForgottenPassword(body)
        .then( data => {
          this.resetForm();
          alert('Check Your Email For Instructions')
        })
        .catch(err => { this.setErr(err) } )
      }
    }

    renderInputs(){
      if (this.state.action === 'login'){
        return (
          <div className={css(styles.inputWrappers)}>
            <input
              onChange={this.changeField.bind(this, 'email')}
              placeholder='Email'
              type='email'
              className={css(styles.input)}/>
            <input
              onChange={this.changeField.bind(this, 'password')}
              placeholder='Password'
              type='password'
              className={css(styles.input)} />
          </div>
        )
      } else if(this.state.action === 'signup') {
        return (
          <div className={css(styles.inputWrappers)}>
            <input
              onChange={this.changeField.bind(this, 'email')}
              placeholder='Email'
              type='email'
              className={css(styles.input)}/>
            <input
              onChange={this.changeField.bind(this, 'password')}
              placeholder='Password'
              type='password'
              className={css(styles.input)}/>
            <input
              onChange={this.changeField.bind(this, 'confirm')}
              placeholder='Confirm Password'
              type='password'
              className={css(styles.input)}/>
          </div>
        )
      } else {
        return (
          <div className={css(styles.inputWrappers)}>
            <input
              onChange={this.changeField.bind(this, 'email')}
              placeholder='Email'
              type='email'
              className={css(styles.input)} />
          </div>
        )
      }
    }
    render() {
      //let inputsToRender = this.determineInputsToRender()
      let inputs = this.renderInputs(this.state.action)
      return (
        <div className={css(styles.wrapper)}>
          <div className={css(styles.overlay)}>
            <div className={css(styles.formContainer)}>
              <span className={css(styles.errors)}> { this.state.clientError } </span>
              { inputs }
              <button onClick={this.handleClick.bind(this)} className={css(styles.loginButton)}>
                { this.getButtonText() }
              </button>
                <div className={css(styles.linksContainer)}>
                {
                  this.state.action === 'login' ?
                    <div>
                      <span
                        className={css(styles.forgot)}
                        onClick={this.changeAction.bind(this, 'forgot')}>
                          Forgot Password
                      </span>
                      <span
                        className={css(styles.swap)}
                        onClick={this.changeAction.bind(this, 'signup')}>
                          Or Sign Up
                      </span>
                    </div>
                  :
                    <span
                      className={css(styles.swap)}
                      onClick={this.changeAction.bind(this, 'login')}>
                        Or Login
                    </span>
                }
                </div>
              </div>
          </div>
        </div>
      );
    }
}

export default Login;
