import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner.jpg';
import moment from 'moment';

import SongContainer from '../SongsContainer/SongsContainer.js'
// import constants fro
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

class PlaylistContainer extends Component {

    constructor(props) {
      console.log('Start of Playlist', props)
      super(props);
      this.state = { };
    }

    openWriterContainer = (writer) => {
      console.log('Viewing', writer);
      this.setState({viewingWriter: writer._id})
    }

    componentDidMount(){
      this.props.closeModal();
    }

    componentWillMount(){
      fetch('http://localhost:8081/api/playlists/' + this.props.match.params.id, {

      //fetch('https://smg-api.herokuapp.com/api/playlists/' + this.props.match.params.id, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      })
      .then(handleErrors)
      .then(data => { return data.json()})
      .then(data => {
        console.log('Data? ', data);
        this.setState({ playlist: data })
      })
      .catch(err => {
        console.log('err', err)
      })
    }
    render() {
        return (
          <div className={ css(styles.wrapper) }>
            <div className={css(styles.wrapper)}>
              <div className={css(styles.overlay)}></div>
              <img className={css(styles.image)} src={image} />
            </div>
              {
                this.state.playlist
                ?
                <div className={css(styles.inner)}>
                  <div className={css(styles.roundWrap)}> <i className={'fa fa-music'} /> </div>
                  <p className={css(styles.playlistTitle)}> { this.state.playlist.title } </p>
                  <p className={css(styles.descritpion)}> {this.state.playlist.description} </p>
                  <div className={css(styles.infoLine)}>
                    <span className={css(styles.data)}> { this.state.playlist.songs.length } Songs - </span>
                    <span className={css(styles.italic)}> Created By: </span>
                    <span className={css(styles.data)}> { this.state.playlist.createdBy.email } -  </span>
                    <span className={css(styles.italic)}>  Updated:  </span>
                    <span className={css(styles.data)}> { moment(this.state.playlist.updatedAt).format('MMMM Do YYYY, h:mm a') }  </span>

                  </div>
                  <SongContainer
                    {...this.props}
                    playlist={this.state.playlist}
                    context='playlist'
                    openWriterContainer={this.openWriterContainer}
                    songs={this.state.playlist.songs} />
                </div>
                :
                <p> Loading> </p>
              }
          </div>
      );
    }
}

export default PlaylistContainer;
