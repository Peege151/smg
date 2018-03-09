import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class UserContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: '',
        user: undefined,
        error: undefined,
        submitting: false,
      };
    }
    modifyTextInput = (field, evt) => {
      console.log('EVT', evt, 'FIELD', field);
      let user = Object.assign({}, this.state.user);
      user[field] = evt.target.value
      this.setState({ user: user })
    }

    editAuthentication = () => {
      let u = this.state.user, cu = this.state.cachedUser;
      let valid = true;
      this.setState({error: ''})
      if((u.email !== cu.email) && !u.password){
        this.setState({error: 'Must Enter Current Password to Change Email'})
        valid = false;
      }
      if(u.newPassowrd && (u.newPassword !== u.confirmPassword)){
        this.setState({error: 'Passwords Do Not Match'})
        valid = false;
      }
      if(u.newPassword && (u.newPassword && u.newPassword.length < 6)){
        this.setState({error: 'Password Too Short'})
        valid = false;
      }
      if(valid){
        this.setState({submitting: true});
        this.props.editUser(this.state.user)
      }
    }

    setEdit = (str) => {
      this.state.editing === 'password' ? str = '' : '';
      this.setState({editing: str});
    }

    componentWillReceiveProps(newProps){
      if(newProps.token.user){
        delete newProps.token.user.password;
        this.setState({ submitting: false, user: newProps.token.user, cachedUser: newProps.token.user })
      }
    }
    componentWillMount(){
      if(this.props.token){
        this.setState({ user: this.props.token.user, cachedUser: this.props.token.user })
      }
    }
    render() {
      if(this.state.user){
        let u = this.state.user;
        let s = this.state;
        return (
          <div className={css(styles.outer)}>
            <div className={css(styles.wrapper)}>
              <div className={css(styles.overlay)}></div>
              <img className={css(styles.image)} src={image} />
            </div>
            <div className={css(styles.inner)}>
              <div className={css(styles.roundWrap)}> <FontAwesomeIcon icon='user' /> </div>
              { this.state.error ? <p> { this.state.error } </p> : null }
            </div>
            <div className={css(styles.formsContainer)}>
              <div className={css(styles.formContainer)}>
                <p> Name Info </p>
                <input
                  onChange={ this.modifyTextInput.bind(null, 'firstName') }
                  disabled={s.editing !== 'firstName'}
                  value={ u.firstName }
                  className={css(styles.input)} />
                <FontAwesomeIcon
                  onClick={this.setEdit.bind(null, 'firstName')}
                  className={css(styles.edit)}
                  icon='edit' />
                <input
                  onChange={ this.modifyTextInput.bind(null, 'lastName') }
                  disabled={s.editing !== 'lastName'}
                  value={ u.lastName }
                  className={css(styles.input)} />
                <FontAwesomeIcon
                  onClick={this.setEdit.bind(null, 'lastName')}
                  className={css(styles.edit)}
                  icon='edit' />
                  <button
                    disabled={this.state.submitted}
                    className={css(
                      styles.button,
                      this.state.submitted && styles.disabled
                    )} >
                    Apply Changes
                  </button>
              </div>
              <div className={css(styles.formContainer)}>
                <p> Authentication Info </p>
                { this.state.editing === 'password' ?
                <div>
                  <input
                    key='pass'
                    onChange={ this.modifyTextInput.bind(null, 'password') }
                    disabled={s.editing !== 'email' && s.editing !== 'password'}
                    placeholder='Current Password' type='password'
                    className={css(styles.input)} />
                  <FontAwesomeIcon
                    onClick={this.setEdit.bind(null, 'password')}
                    className={css(styles.edit)}
                    icon='edit' />
                  <input
                    onChange={ this.modifyTextInput.bind(null, 'newPassword') }
                    placeholder='New Password' type='password'
                    className={css(styles.input, styles.password)} />
                  <input
                    onChange={ this.modifyTextInput.bind(null, 'confirmPassword') }
                    placeholder='Confirm Password' type='password'
                    className={css(styles.input, styles.password)} />
                </div>
                  :
                  <div>
                  <input
                    key='email'
                    onChange={ this.modifyTextInput.bind(null, 'email') }
                    disabled={s.editing !== 'email'}
                    value={ u.email }
                    className={css(styles.input)} />
                  <FontAwesomeIcon
                    onClick={this.setEdit.bind(null, 'email')}
                    className={css(styles.edit)}
                    icon='edit' />
                  <input
                    onChange={ this.modifyTextInput.bind(null, 'password') }
                    disabled={s.editing !== 'email' && s.editing !== 'password'}
                    placeholder='Current Password' type='password'
                    className={css(styles.input)} />
                  <FontAwesomeIcon
                    onClick={this.setEdit.bind(null, 'password')}
                    className={css(styles.edit)}
                    icon='edit' />
                  </div>
                }
                <button
                  onClick={this.editAuthentication.bind(null)}
                  disabled={this.state.submitted}
                  className={css(
                    styles.button,
                    this.state.submitted && styles.disabled
                  )} >
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
      );
    } else {
      return (<div> loading </div>)
    }
  }
}

export default UserContainer;
