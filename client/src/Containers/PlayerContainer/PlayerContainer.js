import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';



class PlayerContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: true,
        currentTime: "0:00",
        track: undefined
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
      if(this.props.song._id !== newProps.song._id) {
        document.getElementById('audio-track').currentTime = 0;
        this.setState({playing: newProps.song._id || true, currentTime: 0})
      }
      if(this.props.song._id === newProps.song._id){
        this.state.track.pause();
      }
    }

    onPlayClick = () => {
      let track = document.getElementById('audio-track');
      if(this.state.playing === this.props.song._id){
        track.pause();
        clearInterval(this.state.interval)
        this.setState( {playing: false } )
      } else if(this.state.playing){
        track.pause();
      } else {
        track.play();
        let id = setInterval( this.timer , 1000)
        this.setState( { playing: this.props.song._id } )
      }
    }
    renderAudioTrack = () => {
      return (
        <audio autoPlay id='audio-track' src={this.props.song.files[0].url}> </audio>
      )
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
    render() {
      let writers = this.props.song.writers.map( writer => {
        return writer.name;
      })
      let progWidth = this.state.track ? ((this.state.track.currentTime / this.state.track.duration * 100) + '%') : '0%';
      console.log('ProgWidth', progWidth)
      let track = this.renderAudioTrack();
      return (
        <div className={ css(styles.playerWrapper) }>
          <div className={css(styles.outerPlay)}>
            <div className={css(styles.playButtonWrapper)}>
              { this.state.playing ?
                <i className={`fa fa-pause ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
                :
                <i className={`fa fa-play ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
              }
            </div>
          </div>
          <div className={css(styles.scrubOuterWrapper)}>
            <div id='scrub' className={css(styles.scrubInnerWrapper)} onClick={(e) => this.scrubAudio(e) } >
              <div style={{ width: progWidth }} className={css(styles.scrubProgress)}> </div>
            </div>
          </div>

          <div className={css(styles.song)}>
            <div> { this.props.song.title } <span className={css(styles.by)}> by</span>&nbsp;  { writers.join(', ') } </div>
              <div> { this.state.currentTime } / { this.props.song.duration } </div>
          </div>
          { track }
        </div>
      );
    }
}
export default PlayerContainer;
