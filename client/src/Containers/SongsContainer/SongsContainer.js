import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import helpers from './helpers';

import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';
import  WriterContainer from '../SearchContainer/WriterContainer/WriterContainer.js';

import SongActions from './SongActions.js'
import {
  Route,
  Link
} from 'react-router-dom'

console.log('Helpers', helpers)
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let HEADERS = ['', 'Name', 'Writer', 'Genres', 'Tempo', 'Length']
class SongsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songs: [],
        filtered: [],
        paused: undefined,
        hoveredSong: undefined
      };
    }
    onMouseEnter = (song, evt) => {
      console.log('Enter!', song, evt)
      this.setState({hoveredSong: song._id})
    }
    onMouseLeave = () => {
      console.log('Leave')
      //this.setState({hoveredSong: undefined})
    }
    toggleAudio = (song) => {
      if(!this.props.song){
        window.mixpanel.track(song.title + '-- Audio Play')
        this.props.toggleAudio(song);
      } else if (this.state.paused && (this.props.playing !== song._id)){
        window.mixpanel.track(song.title + '-- Audio Play')
        this.setState({paused: false});
        this.props.toggleAudio(song);
      }
      else if (this.props.song._id !== song._id){
        window.mixpanel.track(song.title + '-- Audio Play')
        this.props.toggleAudio(song)
      } else {
        this.props.toggleAudio(song)
        this.setState({ paused: true })
      }
    }

    createClickableWriters = (song) => {
      return song.writers.map(writer => {
        return (
              <span key={writer._id}>
                <Link
                  to={{ pathname:'/writer/' + writer.writer, state: {writer: writer}}}
                  className={css(styles.clickableWriter)}
                  onClick={ this.props.openWriterContainer ? this.props.openWriterContainer.bind(null, writer) : null } >
                    {writer.name}&nbsp;
                </Link>
              </span>
        )
      })
    }
    renderSongTable = (songs) => {
      let toMap = songs ? songs : this.state.songs;
      return toMap.map(( song, idx) => {
        let prettyFilters = helpers.beautifyFilters(song);
        let writers = song.writers.map(writer => writer.name);
        return (
          <div
            onMouseEnter={this.onMouseEnter.bind(null, song)}
            onMouseLeave={this.onMouseLeave.bind(this, song)}
            key={`${song.title}${idx}` }
            className={css(
              styles.rowWrapper,
              song._id === this.state.hoveredSong && styles.active
            )}
            >
            <div className={ css(styles.playButtonContainer)} onClick={this.toggleAudio.bind(null, song)}>
              <div className={ css(styles.playButton)}>
                {
                  this.props.paused
                  ?
                  <i className={`fa fa-play ${css(styles.playIcon)}`}></i>
                  :
                  this.props.playing === song._id
                  ? <i className={`fa fa-pause ${css(styles.playIcon)}`}></i>
                  : <i className={`fa fa-play ${css(styles.playIcon)}`}></i>
                }
              </div>
            </div>
            {
              song._id === this.state.hoveredSong
              ?
              <div className={css(styles.innerSongRow)}>
                <div className={ css(styles.td, styles.songTitle) }> { song.title } </div>
                <div className={ css(styles.td) }> { this.createClickableWriters(song) } </div>
                <SongActions hoveredSong={this.state.hoveredSong} {...this.props} />
              </div>
              :
              <div className={css(styles.innerSongRow)}>
                <div className={ css(styles.td, styles.songTitle) }> { song.title } </div>
                <div className={ css(styles.td) }> { this.createClickableWriters(song) } </div>
                <div className={ css(styles.td) }> { prettyFilters } </div>
                <div className={ css(styles.td) }> { song.tempo } BPM </div>
                <div className={ css(styles.td) }> { song.duration } </div>
              </div>
            }
          </div>
        )
      })
    }
    renderHeaders = () => {
      return HEADERS.map( header => {
        return (
          <div key={header} className={css(
            styles.header,
            header === '' && styles.play
          )}>
            { header }
          </div>
        )
      })
    }
    getAllSongs = () => {
      console.log('Getting Songs')
      //fetch('http://localhost:8081/api/songs/', {
      fetch('https://smg-api.herokuapp.com/api/songs/', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      })
      .then(handleErrors)
      .then(data => { return data.json() })
      .then(json => { this.setState({ songs: json }) })
      .catch(err => { this.setState({clientError: err.message}) })
    }
    filterSongs = (newProps) => {
      console.log('the props', newProps);
      if(newProps.method === 'filter'){
        let filters =  [].concat(...Object.keys(newProps.selected).map(key => { return newProps.selected[key] }))
        console.log('FIltering with these filters', filters)
        if(filters.length){
          let query = filters.join('%20');
          //fetch('http://localhost:8081/api/songs/?include=' + query, {
          fetch('https://smg-api.herokuapp.com/api/songs/?include=' + query, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
          })
          .then(handleErrors)
          .then(data => { return data.json() })
          .then(json => {   this.setState({ songs: json }) })
        } else {
          this.getAllSongs();
        }
      } else {
        this.getAllSongs();
      }
    }
    componentWillReceiveProps = (newProps) => {
      if(newProps.method === 'filter'){
        let oldFilters = [].concat(...Object.keys(this.props.selected).map(key => {return this.props.selected[key]}))
        let newFilters = [].concat(...Object.keys(newProps.selected).map(key => {return newProps.selected[key]})).filter(Boolean)
        console.log('Receiving new Props in SC', oldFilters.length, newFilters.length);
        if (oldFilters.length !== newFilters.length) {
          console.log('Different length')
          this.filterSongs(newProps);
        } else {
          console.log('Filtering Songs', newProps.selected)
          this.filterSongs(newProps);
        }
        if(!newFilters.length){
          this.getAllSongs();
        }
      } else {
        // using input bar
        console.log('Props', this.props)
        if(newProps.searchModel !== this.props.searchModel){
          this.getAllSongs();
        }
        if(newProps.songs && newProps.songs.length){
          this.setState({ songs: newProps.songs })
        } else {
          console.log('Ok...', this.state)
          this.setState({songs: this.state.songs})
        }
      }
    }
    componentWillMount(){
      if(this.props.parent !== 'writers') this.getAllSongs();
    }
    render() {
      console.log('Props and State', this.props, this.state)
      let songs =  this.props.songs ? this.renderSongTable(this.props.songs) : this.renderSongTable();
      let headers = this.renderHeaders();
      return (
        <div id='song-container' className={ css(styles.wrapper) }>
          <div className={css(styles.headerWrapper)}>
            { headers }
          </div>
          { songs }
        </div>
      );
    }
}
export default SongsContainer;
