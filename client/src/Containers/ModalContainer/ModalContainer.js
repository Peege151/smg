import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './styles.js';
import image from './../../assets/banner.jpg';

import playlistHTMLBuilder from './playlistHTMLBuilder';
import loginHTMLBuilder from './loginHTMLBuilder';

class ModalContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        submitted: false,
        modalData: { },
        error: undefined,
        action: 'login'//for determining weather to login or signup
      };
    }
    componentWillMount(){
      let modalData
      if(this.props.modal === 'playlist'){
        modalData = { title: undefined, description: undefined, private: false}
      }
      else if (this.props.modal === 'login'){
        modalData = { email: undefined, password: undefined, confirm: undefined }
      }
      this.setState({modalData}, () => console.log('Set MODAL DATA EMPTY?'), this.state)
    }
    generateModalTitle = () => {
      let modal = this.props.modal;
      if(modal === 'playlist') return 'Add to Playlist';
      if(modal === 'login') return 'Oops, You Need To Be Signed In For That';
    }

    textSetter = (target, evt)=> {
      // binds both the text field and text area to associated spot on the state;
      let modalData = Object.assign({}, this.state.modalData)
      modalData[target] = evt.target.value
      this.setState({ modalData })
    }

    playlistValidator = (element, evt) => {
      evt.preventDefault();
      let valid = true;
      if(!this.state.modalData.title) valid = false;
      if(valid) {
        console.log('Form is valid')
        this.props.submitModal('playlist', 'post', this.state.modalData );
        this.setState({submitted: true, error: undefined }, () => {console.log('Submitted')})
      } else {
        this.setState({error: 'Form Not Valid'})
      }
    }

    changeLoginAction = (string) => {
      this.setState({action: string})
    }

    loginValidator = (element, evt) => {
      evt.preventDefault();
      let s = this.state
      let valid = true;
      let params = { action: this.state.action }
      if(!s.modalData.email) valid = false;
      if(s.action === 'login' && !s.modalData.password) valid = false;
      if(s.action === 'signup' && (s.modalData.password !== s.modalData.confirm)) valid = false;

      if(valid && s.action === 'login') {
        this.props.submitModal('login', 'post', s.modalData, params );
        this.setState({submitted: true, error: undefined }, () => {console.log('Submitted')})
      } else if (valid && s.action === 'signup'){
        this.props.submitModal('login', 'post', s.modalData, params );
        this.setState({submitted: true, error: undefined }, () => {console.log('Submitted')})
      } else {
        this.setState({error: 'Form Not Valid'})
      }
    }

    addSongToPlaylist = (playlist) => {
      console.log("ADDING TO PLAYLIST", this.props)
      if( this.props.songToAddToPlaylist) {
        this.setState({ submitted: true })
        playlist.songs.push(this.props.songToAddToPlaylist)
        this.props.submitModal('playlist', 'put', playlist); //second param would be an id for a put req
      } else {
        this.props.history.push('/playlists/'+ playlist._id )
        this.props.closeModal();
      }
    }

    generateModalHTML = () => {
      let user = this.props.token ? this.props.token.user : null, t = this, p = this.props
      let form
      if (p.modal === 'playlist') form = playlistHTMLBuilder.renderPlaylistForm( t.props, t.state, t.textSetter , t.playlistValidator, t.addSongToPlaylist);
      if (p.modal === 'login') form = loginHTMLBuilder.renderLoginForm( t.props, t.state, t.textSetter , t.loginValidator, t.changeLoginAction);

      return (
        <div className={css(styles.absoluteOverlay)}>
          <div className={css(styles.modal)}>
            <h5 className={css(styles.modalTitle)}>
              {this.generateModalTitle()}
              <span className={css(styles.closeModal)} onClick={this.props.closeModal.bind(null, this)}>
                <i className={`fa text-stroke fa-times`} />
              </span>
            </h5>
            { form }
          </div>
        </div>
      )
    }

    render() {
      console.log('MODAL state', this.state)
      let modal = this.generateModalHTML(this.props.modal);
        return (
          <div>
            { modal }
          </div>
      );
    }
}
export default ModalContainer;
