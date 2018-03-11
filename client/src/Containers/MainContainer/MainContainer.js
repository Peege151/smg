import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './styles.js';

import BrowseContainer from '../BrowseContainer/BrowseContainer.js';
import PlayerContainer from '../PlayerContainer/PlayerContainer.js';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer.js';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import UserContainer from '../UserContainer/UserContainer.js';
import WriterContainer from '../SearchContainer/WriterContainer/WriterContainer.js';


import About from '../../Components/About/About.js';
import Contact from '../../Components/Contact/Contact.js'
import Footer from '../../Components/Footer/Footer.js';
import Login from '../../Components/Login/Login.js';
import Logout from '../../Components/Logout/Logout.js';
import Navbar from '../../Components/Navbar/Navbar.js';
import NewPassword from '../../Components/NewPassword/NewPassword.js';

import PlaylistActions from '../../Actions/PlaylistActions.js';
import UserActions from '../../Actions/UserActions.js';
import Promise from 'bluebird';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

class MainContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: false,
        initiatedPlayer: false,
        song: undefined,
        paused: true,
        modal: false,
        token: undefined
      };
    }

    getRequiredData = () => {
      // this should be things you need as soon as you get a user
      return Promise.all([
        PlaylistActions.getUserPlaylists()
      ]);
    }

    componentWillReceiveProps(newProps){
      console.log('WRP', this.props, newProps);
      if(!this.props.token){
        this.getRequiredData()
        .then( data => {
          let token = newProps.token;
          console.log('All Promises have Resolved', data, token);
          newProps.token.user.playlists = data[0] || [];
          this.setState({token: token})
        })
      }
    }
    componentWillMount(){
      let token;
      UserActions.getSession()
      .then(userToken => {
        console.log('User Token? ', userToken)
        token = userToken;
        if(!userToken) throw new Error('No Token')
        if(userToken) return this.getRequiredData()
      })
      .then( data => {
        console.log('All Promises have Resolved', data, token);
        token.user.playlists = data[0];
        this.setState({token: token})
        // user
      })
      .catch(err => {
        console.log( 'Promises Have Failed To Resolve', err);
      })
    }

    editUser = (body) => {
      let token;
      return UserActions.editUser(body)
      .then( data => {
        token = Object.assign({}, data);
        this.setState({token: token, XHRMessage: 'Successfully Edited User'})
        console.log('Back From Edit User', token);
        setTimeout(() => {
          this.setState({modal: false, XHRMessage: ''})
        }, 500)
      })
      .catch( err => {
        console.log('Err', err)
      })
    }
    loginUser = (body, push) => {
      console.log('Login Usr Called', body, push);
      let token;
      return UserActions.login(body)
      .then( data => {
        token = Object.assign({}, data);
        return this.getRequiredData()
      })
      .then( data => {
        console.log('Back From User', data, token);
        token.user.playlists = data[0];
        this.setState({token: token, XHRMessage: 'Successfully Logged In'})
        setTimeout(() => {
          this.setState({modal: false, XHRMessage: ''})
        }, 500)
      })
      .catch(err => {
        console.error('HOLY F', err)
        //throw err;
      })
    }

    signupUser = (body, push) => {
      console.log('Signup Usr Called', body, push);
      let token;
      return UserActions.signup(body)
      .then( data => {
        token = Object.assign({}, data);
        return this.getRequiredData()
      })
      .then( data => {
        console.log('Back From User', data, token);
        token.user.playlists = data[0];
        this.setState({token: token, modal: false})
      })
      .catch(err => {
        console.error('HOLY F', err)
        throw err;
      })
    }

    openSongActionModal = (type, song) => {
      console.log('Opened Modal with this song', song)
      if(song) this.setState({modal: type, songToAddToPlaylist: {song: song, addedBy: this.state.token.user._id}})
      if(!song) this.setState({modal: type })
    }

    closeSongActionModal = () =>{
      this.setState({modal: false, songToAddToPlaylist: undefined })
    }

    clearToken = () => {
      this.setState({token: undefined})
    }

    submitModal = ( modalType, action, body, params ) => {
      if(modalType === 'playlist' && action === 'post') {
        PlaylistActions.createNewPlaylist(body, this.state.songToAddToPlaylist)
        .then(playlist => {
          let token = Object.assign({}, this.state.token);
          token.user.playlists.push(playlist)
          this.setState({ token: token, songToAddToPlaylist: undefined })
          return
        }).catch(err => {console.log('Err!', err)})
      }

      if ( modalType === 'playlist' && action === 'put' ){
        console.log('SUBMIT MODAL', body)
        PlaylistActions.editPlaylist(body)
        .then(playlist => {
          let token = Object.assign({}, this.state.token);
          let idx = this.state.token.user.playlists.findIndex(item => item._id === playlist._id)
          token.user.playlists.splice(idx, 1, playlist);
          this.setState({ token: token, songToAddToPlaylist: undefined })
        })
      }
      if(modalType === 'login' && params.action === 'login'){
        this.loginUser(body)
      } else if (modalType === 'login' && params.action === 'signup'){
        UserActions.signup(body)
        .then(resp => {
          this.setState({ token: resp, modal: false })
        })
      }
    }

    toggleAudio = (song) => {
      // let track = document.getElementById('audio-track');
      if (!this.state.playing && !this.state.initiatedPlayer){
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if(!this.state.playing && this.state.initiatedPlayer){
        //track.play();
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if (this.state.playing === song._id){
        //track.pause();
        this.setState( {playing: false, paused: true } )
      } else if(this.state.playing !== song._id){
        // new song hit from container
        //track.pause();
        this.setState( {song: song, playing: song._id, paused: false } )
      } else {
        //track.play();
        this.setState( { paused: false } )
        // this.props.toggleAudio(this.props.song);
      }
    }

    render() {
      let functions = {
        login: this.loginUser,
        signup: this.signupUser,
        editUser: this.editUser,
        toggleAudio: this.toggleAudio,
        openSongActionModal: this.openSongActionModal,
        closeModal: this.closeSongActionModal,
        modal: this.state.modal,
        submitModal: this.submitModal,
        clearToken: this.clearToken
      }
      let state = this.state
        return (
          <div className={ css(styles.mainContainerWrapper) }>
            <Router>
              <div className={css(styles.routerContainer)}>
                <div className={css(styles.content)}>
                  <Route path='/' render={(routeProps) => <Navbar {...functions}{...state}{...routeProps} />}/>
                  <Switch>
                    <Route exact path='/browse' component={ BrowseContainer } />
                    <Route exact path='/login' render={(routeProps) => <Login {...functions} {...routeProps}/>}/>
                    <Route exact path='/user/:user' render={(routeProps) => <UserContainer token={this.state.token} {...routeProps} {...functions}/>}/>
                    <Route exact path='/reset' component={ NewPassword } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/logout' render={(routeProps) => <Logout {...functions} {...routeProps}/>} />
                    <Route exact path='/writer/:writer' render={(routeProps) => <WriterContainer {...routeProps} {...state} {...functions}/> } />
                    <Route exact path='/playlists/:id' render={(routeProps) => <PlaylistContainer {...routeProps} {...state} {...functions}/> } />
                    <Route path='/' render={(routeProps) => <SearchContainer {...routeProps}{...state} {...functions}/>}/>
                  </Switch>
                </div>
                <div className={css(styles.footer)}>
                  <Footer />
                </div>
                  {   state.initiatedPlayer ? <PlayerContainer {...state} toggleAudio={ this.toggleAudio } /> :   null }
              </div>
            </Router>
          </div>
      );
    }
}

export default MainContainer;
