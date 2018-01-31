import React, { Component } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import BrowseContainer from '../BrowseContainer/BrowseContainer.js';
import Login from '../../Components/Login/Login.js';
import Contact from '../../Components/Contact/Contact.js'
import NewPassword from '../../Components/NewPassword/NewPassword.js';
import PlayerContainer from '../PlayerContainer/PlayerContainer.js';
import Footer from '../../Components/Footer/Footer.js';
import About from '../../Components/About/About.js';
import styles from './styles.js';
import { css } from 'aphrodite';
import Navbar from '../../Components/Navbar/Navbar.js';


import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

class MainContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: false,
        initiatedPlayer: false,
        song: undefined,
        paused: true
      };
    }
    toggleAudio = (song) => {
      let track = document.getElementById('audio-track');
      if (!this.state.playing && !this.state.initiatedPlayer){
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if(!this.state.playing && this.state.initiatedPlayer){
        track.play();
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if (this.state.playing === song._id){
        track.pause();
        this.setState( {playing: false, paused: true } )
      } else if(this.state.playing !== song._id){
        // new song hit from container
        track.pause();
        this.setState( {song: song, playing: song._id, paused: false } )
      } else {
        track.play();
        this.setState( { paused: false } )
        // this.props.toggleAudio(this.props.song);
      }
    }

    render() {
        console.log('Router Props of MC', this.props)
        return (
          <div className={ css(styles.mainContainerWrapper) }>
            <Router>
              <div className={css(styles.routerContainer)}>
                <div className={css(styles.content)}>
                  <Route path='/' component={ Navbar } />
                  <Route exact path='/' render={(routeProps)=><SearchContainer {...routeProps}{...this.state} toggleAudio={this.toggleAudio}/>}/>
                  <Route exact path='/browse' component={ BrowseContainer } />
                  <Route exact path='/login' component={ Login } />
                  <Route exact path='/contact' component={ Contact } />
                  <Route exact path='/reset' component={ NewPassword } />
                  <Route exact path='/about' component={ About } />
                </div>
                <div className={css(styles.footer)}>
                  <Footer />
                </div>

                  {
                    this.state.initiatedPlayer
                    ?
                    <PlayerContainer {...this.state} toggleAudio={ this.toggleAudio } />
                    :
                    null
                  }
              </div>
            </Router>
          </div>
      );
    }
}

export default MainContainer;
