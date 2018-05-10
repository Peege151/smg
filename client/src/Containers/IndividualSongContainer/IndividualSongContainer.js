import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import styles from './styles.js';
import { css } from 'aphrodite';

import image from './../../assets/banner.jpg';
import ImageTop from '../../Components/ImageTop/ImageTop';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SongActions from '../SongsContainer/SongActions';
import songHelpers from '../../Components/Song/helpers';
import SongAjax from '../../Actions/SongActions'
import WaveSurfer from 'react-wavesurfer';
import WriterContainer from '../SearchContainer/WriterContainer/WriterContainer';
class IndividualSongContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bufferingNewSong: true,
        pos: 0,
        paused: false,
      //  song: {}
      };
    }
    onReady = (e) => { this.setState({bufferingNewSong: false})}
    onFinish = (e) => { console.log('On Finish', e)}
    onClick = (e) => {
      this.props.toggleAudio(this.state.song);
      this.setState({ paused: !this.state.paused })
    }
    componentWillMount(){
      this.setState({song: this.props.location.state ? this.props.location.state.song : {} })
      SongAjax.getSong(this.props.match.params.song)
      .then(data => this.setState({song: data}))
    }
    componentWillReceiveProps(newProps){
      console.log('CWRP Idie', newProps)
      // console.log('New Props ISC', newProps)
      // if(newProps.paused && newProps.initiatedPlayer) this.setState({paused: false})
      // if(!newProps.playing && newProps.initiatedPlayer) this.setState({paused: true})
    }
    // this exact function is used elsewhere in playlist TODO be more functional
    createClickableWriters = (song) => {
      return song.writers.map(writer => {
        return (
          <span key={writer._id}>
            { writer.writer.repped ?
              <Link
                to={{ pathname:'/writer/' + writer.writer._id, state: {writer: writer}}}
                className={css(styles.clickableWriter)}
                onClick={ this.props.openWriterContainer ? this.props.openWriterContainer.bind(null, writer) : null } >
                {writer.writer ? writer.writer.name : 'John Smith'}&nbsp;
              </Link>
              :
              <span className={css(styles.unclickableWriter)}> {writer.writer ? writer.writer.name : 'John Smith'} &nbsp; </span>
            }
          </span>
        )
      })
    }
    render() {
      let WSOpts = {
        height: 70,
        waveColor: '#d7d7d7',
        progressColor: 'white',
        cursorColor: 'white',
        overflow: 'auto !important'
      };
      const s = this.state.song;
      if (!this.state.song.hasOwnProperty('_id')){
        return (
          <div> Loading </div>
        )
      } else {
        return (
          <div className={ css(styles.wrapper) }>
            <ImageTop image={image} />
            <div className={css(styles.top)}>
              <div className={css(styles.iconTop)} onClick={this.onClick.bind(null, this)}>
                {this.state.paused ?  <FontAwesomeIcon icon="pause"/> : <FontAwesomeIcon icon="play"/> }
              </div>
              <div className={css(styles.songTitle)}> { s.title } </div>
              <div className={css(styles.by)}> by </div>
              <div className={css(styles.writers)}> { this.createClickableWriters(s) } </div>
            </div>
            <div className={css(styles.actions)}>
              <SongActions context='individualTop' {...this.props} hoveredSong={s} />
            </div>
            <div className={css(styles.songDataWrapperLeft)}>
              <h5 className={css(styles.title)}> Vocals </h5>
              <div className={css(styles.vocals)}> { songHelpers.beautifyFilters(s, 'vocals', true)} </div>
              <h5 className={css(styles.title)}> Genres </h5>
              <div className={css(styles.genres)}> { songHelpers.beautifyFilters(s, 'genres', true)} </div>
              <h5 className={css(styles.title)}> Instruments </h5>
              <div className={css(styles.instruments)}> { songHelpers.beautifyFilters(s, 'instruments', true)} </div>
            </div>
            <div className={css(styles.songDataWrapperRight)}>
              <h5 className={css(styles.title)}> Vibe </h5>
              <div className={css(styles.vibe)}> { songHelpers.beautifyFilters(s, 'vibe', true)} </div>
              <h5 className={css(styles.title)}> Sounds Like </h5>
              <div className={css(styles.similar)}> { songHelpers.beautifyFilters(s, 'relatedArtists', true)} </div>
              <h5 className={css(styles.title)}> Tempo </h5>
              <div className={css(styles.tempo)}> { s.tempo } Beats Per Minute </div>
            </div>
            <h5 style={{textAlign: 'center', marginBottom: 20, marginTop: 20}}> Waveform </h5>
            <div className={css(styles.waveform)}>
              { this.state.bufferingNewSong ? <div style={{textAlign: 'center'}}> <FontAwesomeIcon icon="spinner" pulse/></div> : null }
              <WaveSurfer
                options={WSOpts}
                onReady={this.onReady}
                audioFile={s.files[0].url}
                pos={0}
                onFinish={this.onFinish}
                height={60}
                zoom={1}
                />
            </div>
            {
              s.writers.length === 1
              ?
              <div className={css(styles.loneWriter)}>
                <WriterContainer context='individual' individualSong={s} {...this.props}/>
              </div>
              :
              null
            }
          </div>
      );
    }
  }
}

export default IndividualSongContainer;
