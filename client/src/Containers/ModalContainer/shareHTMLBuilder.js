import React from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';

let shareHTMLBuilder = {
  renderShareForm: (props, state, setter, validator) => {
    console.log('Props?', props, state)
    let resource = props.songToAddToPlaylist ? props.songToAddToPlaylist.song : props.playlistToShare
    return (
      <div>
        <p className={css(styles.formTitle)} >
          Sending "{resource.title}"
        </p>
        <form className={css(styles.modalForm)}>
          <input
            placeholder={'Email We\'ll Send This To...'}
            className={css(styles.modalInput)}
            onChange={setter.bind(null, 'to')} />
          <textarea
            placeholder='Add a Note.  If you wanna.'
            className={css(styles.modalTextarea)}
            onChange={setter.bind(null, 'note')} />
          <button
            onClick={validator.bind(null, state.modalData)}
            disabled={state.submitted}
            className={css(
              styles.submitModal,
              state.submitted && styles.disabled
            )} >
            Share Song
          </button>
        </form>
        { state.error ? <p className={css(styles.error)}> {state.error} </p> : null }
      </div>
    )
  }
}
export default shareHTMLBuilder;
