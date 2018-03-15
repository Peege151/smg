import React from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';

let generateUserPlaylistList = (props, atp) => {
  console.log(props.token)
  let userPlaylists = props.token ? props.token.user.playlists : [];
  console.log('USERP', userPlaylists)
  return userPlaylists.map(playlist => {
    return (
      <div onClick={atp.bind(null, playlist)} className={css(styles.playlistOption)} key={playlist._id}>
        { playlist.title }
        <span className={css(styles.numSongs)}> { playlist.songs ? playlist.songs.length : 0 }  Songs </span>
      </div>
    )
  })
}

let playlistHTMLBuilder = {
  renderPlaylistForm: (props, state, setter, validator, atp) => {
    let playlistOptions = generateUserPlaylistList(props, atp)
    return (
      <div>
        <div className={css(styles.selectPlaylists)}>
         { playlistOptions.length ? playlistOptions : "Oh hey there... you haven't made any playlists yet, so add this track to a new one"}
        </div>
        <p className={css(styles.formTitle)} >
          New Playlist
        </p>
        <form className={css(styles.modalForm)}>
          <input
            placeholder={'Title (Required)'}
            className={css(styles.modalInput)}
            onChange={setter.bind(null, 'title')} />
          <textarea
            placeholder='(Optional) Add a description for this playlist.  If you wanna.'
            className={css(styles.modalTextarea)}
            onChange={setter.bind(null, 'description')} />
          <button
            onClick={validator.bind(null, state.modalData)}
            disabled={state.submitted}
            className={css(
              styles.submitModal,
              state.submitted && styles.disabled
            )} >
            Submit Playlist
          </button>
        </form>
        { state.error ? <p className={css(styles.error)}> {state.error} </p> : null }
      </div>
    )
  }
}
export default playlistHTMLBuilder;
