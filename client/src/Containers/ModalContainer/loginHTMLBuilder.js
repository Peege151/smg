import React from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';
let renderAlternate = (s, changeAction) => {
  if(s.action === 'login') {
    return <div onClick={changeAction.bind(null, 'signup')}> Register </div>
  } else if (s.action === 'signup'){
    return <div onClick={ changeAction.bind(null, 'login')}> Login </div>
  }
}
let determineFormTitle = (action) => {
    if(action === 'login') return 'Login';
    if(action === 'signup') return 'Register'
    if(action === 'forgot') return 'Recover Password'
}

let renderFields = (fieldsToRender, setter) => {
  return fieldsToRender.map((field, idx) => {
    let type = 'password'
    if( field  === 'Email' ) type = 'text'
    return (
      <input
        key={field + idx}
        onChange={setter.bind(this, field.toLowerCase())}
        placeholder={`Enter ${field}`}
        type={type}
        className={css(styles.modalInput)} />
    )
  })
}

let loginHTMLBuilder = {
  renderLoginForm: (props, state, setter, validator, changeAction) => {
    let fieldsToRender;
    let formTitle = determineFormTitle(state.action);
    let alternate = renderAlternate(state, changeAction);
    let forgot

    if(state.action === 'login') fieldsToRender = ['Email', 'Password'];
    if(state.action === 'signup') fieldsToRender = ['Email', 'Password', 'confirm'];
    if(state.action === 'forgot') fieldsToRender = ['Email'];

    let fields = renderFields(fieldsToRender, setter);
    return (
      <form className={css(styles.modalForm)}>
        <h5 className={css(styles.formTitle)}> {formTitle} </h5>
        {fields}
        <button
          onClick={validator.bind(null, state.modalData)}
          disabled={state.submitted}
          className={css(
            styles.submitModal,
            state.submitted && styles.disabled
          )} >
          { formTitle }
        </button>
        {alternate}{forgot}
        <span className={css(styles.errors)}> { state.error } </span>

      </form>
    )
  }
}

export default loginHTMLBuilder;
