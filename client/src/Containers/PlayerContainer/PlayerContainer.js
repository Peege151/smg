import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import defaultArtwork from './../../assets/loader.png';



class PlayerContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: true,
        currentTime: "0:00",
        track: undefined,
        waveformLoaded: false,
      };
    }

    componentDidMount(){
      let audio = document.getElementById('audio-track');
      audio.ontimeupdate = () => {
        this.setState({ currentTime: this.prettyTime(audio.currentTime)})
      }
      this.setState({ playing: true, track: audio })
    }

    componentWillReceiveProps(newProps){
      console.log('PLAYER GETTING PROPS', newProps.paused, this.state.paused)
      this.setState({paused: newProps.paused})
        // if(this.props.playing !== newProps.playing) {
        //   console.log('Not the same song...')
        //   document.getElementById('audio-track').currentTime = 0;
        //   this.setState({playing: newProps.song._id || true, currentTime: 0, paused: false})
        // }
        // if(this.props.song._id === newProps.playing && !this.state.paused){
        //   console.log('Lets Pause the player icon', newProps.playing)
        //   this.state.track.pause();
        //   this.setState({playing: false, paused: true }, () => console.log('Playing? ', this.state.playing))
        // } else if (this.props.song._id === newProps.playing && this.state.paused){
        //   this.state.track.play();
        //   this.setState({playing: newProps.song._id, paused: false })
        // }

    }

    onPlayClick = () => {
      console.log('Play Click...')
      let track = document.getElementById('audio-track');
      this.props.toggleAudio(this.props.song);
      this.setState({ paused: !this.state.paused })
    }
    renderAudioTrack = () => {
      return (
        <audio autoPlay id='audio-track' src={this.props.song.files[0].url}> </audio>
      )
    }

    waveformLoaded = () => {
      console.log('WAVEFORM LOADED');
      this.setState({waveformLoaded: true})
    }

    hide404Image = (nt, node) => {
      console.log('Error Hit', node);
      node.target.style.display='none'
    }

    scrubAudio = (e) => {
      let audio = document.getElementById('audio-track');

      console.log(e.target.getBoundingClientRect(),  e.target.clientWidth, e.screenX);
      let x = e.screenX - e.target.getBoundingClientRect().x
      let playerWidth = document.getElementById('scrub').clientWidth;
      console.log('playerWidth', playerWidth, playerWidth.width)
      let percentageToScrubTo = x / playerWidth;
      console.log('percentage to scrub to', percentageToScrubTo);
      let secondsOfSongToScrubTo = Math.floor(this.state.track.duration * percentageToScrubTo);
      audio.currentTime = secondsOfSongToScrubTo;
      this.setState({ track: audio }, () => console.log( 'State', this.state ))
    }
    prettyTime = (time) => {
      // Well, if time is the duration on the track, it is a string... NAN
      var minutes = Math.floor(time / 60);
      var seconds = Math.round(time - minutes * 60);
      if (seconds < 10) seconds = "0" + seconds;
      if (!seconds) seconds = this.props.song.duration.slice(-1, 2)
      if(time){
        return minutes + ':' + seconds;
      } else {
        if(time === 0) {
          return '0:0' + time;
        }
        return time;
      }
    }
    onSongTitleClick = () => {
      console.log('Sup', this.props)
    }
    render() {
      let albumArtwork = this.props.song && this.props.song.album ? this.props.song.album.artwork || this.props.song.artwork : defaultArtwork
      let writers = this.props.song.writers.map( writer => {
        return writer.name;
      })
      let progWidth = this.state.track ? ((this.state.track.currentTime / this.state.track.duration * 100) + '%') : '0%';
      let track = this.renderAudioTrack();
      return (
        <div className={ css(styles.playerWrapper) }>
          <div className={css(
            styles.playButtonWrapper,
          //  this.state.waveformLoaded && styles.waveformLoaded
          )}>
            { this.state.paused ?
              <i className={`fa fa-play ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
              :
              <i className={`fa fa-pause ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
            }
          </div>
          <div className={css(styles.artworkWrap)}>
            <img className={css(styles.artwork)} alt='album-artwork' src={albumArtwork}/>
          </div>
          <div className={css(styles.scrubOuterWrapper)}>
            <div
              id='scrub'
              onClick={(e) => this.scrubAudio(e) }
              className={css(
                styles.scrubInnerWrapper,
                this.state.waveformLoaded && styles.waveformLoaded
              )}>
              <img
                className={css(
                  styles.waveformImage,
                  //this.state.waveformLoaded && styles.waveformLoaded
                )}
                src={`${this.props.song.waveform}`}
                onLoad={this.waveformLoaded.bind(null, this)}
                onError={this.hide404Image.bind(null, this)}
                />
              <div style={{ width: progWidth }} className={css(styles.scrubProgress)}> </div>
            </div>
          </div>

          <div className={css(styles.song)}>
            <span className={css(styles.songTitle)} onClick={ this.onSongTitleClick.bind(this, null) } >
              { this.props.song.title }
            </span>
            <span className={css(styles.by)}> &nbsp;by&nbsp; </span>
            <span className={css(styles.songWriters)}> { writers.join(', ') } </span>
          </div>
          <div className={css(styles.timeCounters)}> { this.state.currentTime } / { this.props.song.duration }</div>
          { track }
        </div>
      );
    }
}
export default PlayerContainer;
