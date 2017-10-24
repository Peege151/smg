import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';



class PlayerContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: true,
        currentTime: 0,
        interval: undefined,
      };
    }
    componentDidMount(){
      this.timer()
      let id = setInterval( this.timer , 1000)
      this.setState({interval: id})
    }

    componentWillReceiveProps(newProps){
      if(this.props.song._id !== newProps.song._id) {
        this.setState({playing: true})
      }
    }
    timer = () => {
      console.log('Firing', this.state.currentTime)
      let timeString;
      let minute = Math.floor(this.state.currentTime / 60);
      let seconds = this.state.currentTime % 60;
      if (seconds < 10) seconds = '0' + String(seconds)
      if (this.state.currentTime === 0) timeString === '0:00'
      timeString = String(minute) + ':'+ String(seconds);
      console.log(String(minute), String(seconds))
      this.setState({ currentTime: this.state.currentTime + 1, timeString });
    }
    onPlayClick = () => {
      let track = document.getElementById('audio-track');
      if(track){
        if(this.state.playing){
          track.pause();
          clearInterval(this.state.interval)
          this.setState( {playing: false } )
        } else {
          track.play();
          let id = setInterval( this.timer , 1000)
          this.setState( {playing: true, interval: id } )
        }
      }

    }

    render() {
      let writers = this.props.song.writers.map( writer => {
        return writer.name;
      })
      return (
        <div className={ css(styles.playerWrapper) }>
          <div className={css(styles.playButtonWrapper)}>
            { this.state.playing ?
              <i className={`fa fa-pause ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
              :
              <i className={`fa fa-play ${css(styles.playIcon)}`} onClick={ this.onPlayClick.bind(null, this) }></i>
            }
          </div>
          <div className={css(styles.song)}>
            <div> { this.props.song.title } </div>
            <div> { this.state.timeString } / { this.props.song.duration } </div>
          </div>
          <div className={css(styles.by)}> By: </div>
          <div className={css(styles.writers)}> { writers.join(', ') } </div>

          <audio autoPlay id='audio-track' src={this.props.song.files[0].url}> </audio>
        </div>
      );
    }
}
export default PlayerContainer;
