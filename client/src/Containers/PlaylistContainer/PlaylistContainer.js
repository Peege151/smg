import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner.jpg';
import moment from 'moment';
import ImageTop from '../../Components/ImageTop/ImageTop';
import PlaylistActions from '../../Actions/PlaylistActions';
import SongContainer from '../SongsContainer/SongsContainer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class PlaylistContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        tooltip: '',
        playlist: {},
        collaborators: []
      };
    }

    serializePlaylistForSongContainer = (data) => {
      let dataClone = Object.assign({}, data);
      let collaborators = data.songs.map(song => song.addedBy.email);
      let songs = data.songs.map(song => {
        return song.song;
      });
      this.setState({ playlist: Object.assign({}, data), collaborators: collaborators, songs: [...songs] } )
    }

    componentWillMount(){
      PlaylistActions.getPlaylist(this.props.match.params.id)
      .then(data => { this.serializePlaylistForSongContainer(data)})
      .catch(err => { console.log('err', err) })
    }

    componentWillReceiveProps(newProps){
      if( newProps.playlist){
        this.serializePlaylistForSongContainer(newProps.playlist);
        return;
      }
      if(this.props.match.url !== newProps.match.url){
        PlaylistActions.getPlaylist(newProps.match.params.id)
        .then(data => { this.serializePlaylistForSongContainer(data) })
        .catch(err => { console.log('err', err) })
      }
    }

    openWriterContainer = (writer) => {
      this.setState({viewingWriter: writer._id})
    }

    componentDidMount(){
      this.props.closeModal();
    }

    toggleCollaboration = () => {
      let collaborative = !this.state.playlist.collaborative
      let playlist = Object.assign({}, this.state.playlist);
      playlist.songs.map(function(song){
        song.addedBy = song.addedBy._id;
        song.song = song.song._id
      })
      playlist.collaborative = collaborative;
      PlaylistActions.editPlaylist(playlist)
      .then(data => {
        this.serializePlaylistForSongContainer(data);
      })
    }

    share = () => {
      this.props.openSongActionModal('share', this.state.playlist)
    }

    joinPlaylist = () => {
      // NO USER USE MODAL LOGIN
      let currentUser = this.props.token ? this.props.token.user : {};
      let playlist = Object.assign({}, this.state.playlist);
      playlist.songs.map(function(song){
        song.addedBy = song.addedBy._id;
        song.song = song.song._id
      })
      let collaborators = playlist.collaborators.map(collab => collab._id)
      console.log('playlist first', playlist);
      if (collaborators.indexOf(currentUser._id) > -1 ){
        collaborators.splice(collaborators.indexOf(currentUser._id, 1))
      } else {
        collaborators.push(currentUser._id)
      }
      playlist.collaborators = collaborators;
      console.log('playlist second', playlist);
      this.setState({playlist: playlist})
      PlaylistActions.editPlaylist(playlist)
      .then(data => {
        this.serializePlaylistForSongContainer(data);
      })
      .catch(err => console.log('err', err));
    }

    moveSong = (dragIndex, hoverIndex) => {

      let songs = this.state.playlist.songs
      let draggedSong = songs[dragIndex]
      songs.splice(dragIndex, 1);
      songs.splice(hoverIndex, 0, draggedSong);
      let playlist = Object.assign({}, this.state.playlist);
      // this.serializePlaylistForSongContainer(playlist);

      PlaylistActions.editPlaylist(playlist)
      .then(data => {
        this.serializePlaylistForSongContainer(data);
      })
    }
    deletePlaylist = () => {
      let txt;
      console.log('Deleting Playlist')
      let confirmed = window.confirm('Deleting Playlists Will Be Possible In Next Site Update')
      if (confirmed) {
        console.log('You Did THE THING')
      } else {
          console.log('You Did NOT')
      }
    }
    onMouseOver = (icon) => { this.setState({tooltip: icon.tooltip}) }
    onMouseOut = () => { this.setState({tooltip: ''})}

    renderIcons = () => {
      let currentUser = this.props.token ? this.props.token.user : {};
      let playlistCreator = this.state.playlist && this.state.playlist.createdBy ? this.state.playlist.createdBy._id : undefined;
      let access = playlistCreator && (currentUser === playlistCreator || currentUser.admin);
      let isCollaborator = this.props.playlist ? this.props.playlist.collaborators.find(bro => bro._id === currentUser._id) : false;
      let centerIcons = [ {icon: 'share', tooltip: 'Share Playlist', click: this.share.bind(null, this) } ]
      if (access) centerIcons.push({icon: 'handshake', tooltip: 'Toggle Collaboration', click: this.toggleCollaboration.bind(null, this)})
      if (!isCollaborator && (currentUser._id !== playlistCreator)  && this.state.playlist.collaborative) centerIcons.push({icon: 'sign-in-alt', tooltip: 'Join Playlist', click: this.joinPlaylist.bind(null, this)})
      return centerIcons.map(icon => {
        return (
          <div
            key={icon.icon}
            onClick={icon.click}
            onMouseLeave={this.onMouseOut}
            onMouseOver={this.onMouseOver.bind(null, icon)}
            className={css(styles.action)}
            >
            <FontAwesomeIcon icon={icon.icon} />
          </div>
        )
      })
    }
    renderCollaboratorsHTML = () => {
      console.log('Rendering Collab')
      return this.state.playlist.collaborators.map(collab => {
        return <div className={css(styles.collabie)} key={collab}> { collab.email } </div>
      })
    }
    render() {
      console.log('Rendering Playlist', this.state)
      let currentUser = this.props.token ? this.props.token.user : {};
      let playlistCreator = this.state.playlist.createdBy ? this.state.playlist.createdBy._id : undefined;
      let access = playlistCreator && (currentUser === playlistCreator);
      let centerIcons = this.renderIcons()
        return (
          <div className={ css(styles.wrapper) }>
              <ImageTop image={image} />
              {
                this.state.playlist && this.state.playlist.songs && this.state.playlist.createdBy
                ?
                <div className={css(styles.inner)}>
                  <div className={css(styles.roundWrap)}> <FontAwesomeIcon icon='music' /> </div>
                  <p className={css(styles.playlistTitle)}> { this.state.playlist.title } </p>
                  <p className={css(styles.descritpion)}> {this.state.playlist.description} </p>
                  <div className={css(styles.infoLine)}>
                    <span className={css(styles.data)}> { this.state.playlist.songs.length } Songs - </span>
                    <span className={css(styles.italic)}> Created By: </span>
                    <span className={css(styles.data)}> { this.state.playlist.createdBy.email } -  </span>
                    <span className={css(styles.italic)}>  Updated:  </span>
                    <span className={css(styles.data)}> { moment(this.state.playlist.updatedAt).format('MMMM Do YYYY, h:mm a') }  </span>
                  </div>
                  <div className={css(styles.actionsWrapper)}>
                    <div className={css(styles.right)}>
                    {access ?
                      <div className={css(styles.action)} onClick={this.deletePlaylist}> <FontAwesomeIcon icon='trash-alt' /> </div>
                    : null }
                    </div>
                    <div className={css(styles.center)}>
                      { centerIcons }
                    </div>
                    <div className={css(styles.tooltip)}> { this.state.tooltip } </div>
                  </div>
                  { this.state.playlist.collaborative ? <p className={css(styles.collaboratingInfo)}> Collaborating </p> : null }
                  { this.state.playlist.collaborators ? this.renderCollaboratorsHTML() : null }

                  <div className={css(styles.playlistSCWrapper)}>
                    <SongContainer
                      {...this.props}
                      playlist={this.state.playlist}
                      collaborators={this.state.collaborators}
                      context='playlist'
                      moveSong={ this.moveSong }
                      openWriterContainer={this.openWriterContainer}
                      songs={this.state.songs} />
                  </div>
                </div>
                :
                <div className={css(styles.loadingContainer)}> <FontAwesomeIcon icon='spinner' pulse /> </div>
              }
          </div>
      );
    }
}

export default PlaylistContainer;
