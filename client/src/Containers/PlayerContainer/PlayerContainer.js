
import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import defaultArtwork from './../../assets/loader.png';
import WaveSurfer from 'react-wavesurfer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import helpers from './helpers.js'

class PlayerContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: true,
        currentTime: "0:00",
        pos: 0,
        paused: false,
        bufferingNewSong: true
      };
    }

    componentDidMount(){
      this.setState({ playing: true })
    }

    componentWillReceiveProps(newProps){
      if(this.props.playing && newProps.song._id && (this.props.playing !== newProps.song._id)){
        // user hit play on another track withuot pausing.
        console.log('Clicked A New Song While Music is Playing', this.props.playing, newProps.song._id);
        this.setState({bufferingNewSong: true })
      } else if (this.props.playing === newProps.song._id && !newProps.playing){
        console.log('Clicked Pause On Playing Song')
      } else if (this.props.playing !== newProps.song._id && newProps.playing){
        console.log('Clicked A New Song While Nothing is Playing (playing is false)')
        this.setState({pos: 0, bufferingNewSong: true})
      }
      this.setState({paused: newProps.paused})
    }

    onPlayClick = () => {
      console.log('Play Click...');
      // TODO fix bug where IF SONG IS PAUSED and new one is clicked player does not reset to 0 timestamp
      this.props.toggleAudio(this.props.song);
      this.setState({ paused: !this.state.paused })
    }

    onSongTitleClick = () => {
      console.log('Sup', this.props)
    }

    handlePosChange = (e) => { this.setState({ pos: e.originalArgs[0], currentTime: helpers.prettyTime(e.originalArgs[0]) }) }
    // onPlay = (e) => { console.log('On Play', e)}
    // onFinish = (e) => { console.log('On Finish', e)}
    // onLoading = (e) => { console.log('On Loading', e)}
    onReady = (e) => { this.setState({bufferingNewSong: false })}

    render() {
      let WSOpts = {
        height: 70,
        waveColor: '#d7d7d7',
        progressColor: 'white',
        cursorColor: '#4b5d7c'
      };

      const albumArtwork = ( this.props.song && this.props.song.album ) ? ( this.props.song.album.artwork || this.props.song.artwork ) : defaultArtwork
      const writers = this.props.song.writers.map( writer => { writer.name })
      let playSong = this.state.bufferingNewSong ? false : true;

      if (this.state.paused || this.state.buffering) playSong = false;
      return (
        <div className={ css(styles.playerWrapper) }>
          <div
            onClick={ this.onPlayClick.bind(null, this) }
            className={css(
              styles.playButtonWrapper,
              //  this.state.waveformLoaded && styles.waveformLoaded
            )}>
            { this.state.bufferingNewSong ? <div className={css(styles.playIcon)}> <FontAwesomeIcon icon="spinner" pulse/></div>
            :
             this.state.paused ?
              <div className={css(styles.playIcon)}> <FontAwesomeIcon icon="play"/></div>
              :
              <div className={css(styles.playIcon)}> <FontAwesomeIcon icon="pause"/></div>
            }
          </div>
          <div className={css(styles.artworkWrap)}>
            <img className={css(styles.artwork)} alt='album-artwork' src={albumArtwork}/>
          </div>
          <div className={css(styles.scrubOuterWrapper)}>
            <div
              id='scrub'
              className={css(
                styles.scrubInnerWrapper,
              )}>
              <WaveSurfer
                audioFile={this.props.song.files[0].url}
                pos={this.state.pos}
                onPlay={this.onPlay}
                onFinish={this.onFinish}
                onReady={this.onReady}
                onLoading={this.onLoading}
                onPosChange={this.handlePosChange}
                playing={playSong}
                height={60}
                options={WSOpts}
                zoom={1}
                />
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
        </div>
      );
    }
}
export default PlayerContainer;
