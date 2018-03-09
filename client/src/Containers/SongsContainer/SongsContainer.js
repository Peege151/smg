import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';
import  WriterContainer from '../SearchContainer/WriterContainer/WriterContainer.js';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Song from '../../Components/Song/Song.js';
import SongActions from '../../Actions/SongActions.js';

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let HEADERS = ['Name', 'Writer', 'Genres', 'Tempo', 'Length']
class SongsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songs: [],
        filtered: [],
        paused: undefined,
        hoveredSong: {}
      };
    }

    onTouchMove = (song, evt) => {
      console.log('TOUCH MOVE', evt)
    }

    onMouseLeave = () => {
      this.setState({hoveredSong: {}})
    }

    onMouseOver = (song, evt) => {
      if (window.innerWidth <= 768) {
        // don't fire mouse over event for mobile devices
      } else {
        evt.stopPropagation();
        this.setState({hoveredSong: song})
      }
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

    renderSongTable = (songs) => {

      let functions = {
        onMouseLeave: this.onMouseLeave,
        moveSong: this.props.moveSong,
        onTouchMove: this.onTouchMove,
        onMouseOver: this.onMouseOver,
        toggleAudio: this.toggleAudio
      }

      let toMap = songs ? songs : this.state.songs;
      return toMap.map(( song, idx) => {
        let collaborator = this.props.collaborators ? this.props.collaborators[idx] : undefined;
        let writers = song.writers.map((writer, idx) => writer.name);
        return (
            <Song
              key={idx}
              data={song}
              idx={idx}
              hoveredSong={this.state.hoveredSong}
              collaborator={collaborator}
              {...this.props}
              { ...functions}
            />
          )
      })
    }

    renderHeaders = () => {
      return HEADERS.map( header => {
        return (
          <div key={header} className={css(
            styles.header,
          )}>
            { header }
          </div>
        )
      })
    }
    getAllSongs = () => {
      SongActions.getAllSongs()
      .then(json => { this.setState({ songs: json }) })
      .catch(err => { this.setState({clientError: err.message}) })
    }
    filterSongs = (newProps) => {
      if(newProps.method === 'filter'){
        let filters =  [].concat(...Object.keys(newProps.selected).map(key => { return newProps.selected[key] }))
        if(filters.length){
          let query = filters.join('%20');
          SongActions.filterSongs(query)
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
        if (oldFilters.length !== newFilters.length) {
          this.filterSongs(newProps);
        } else {
          this.filterSongs(newProps);
        }
        if(!newFilters.length) this.getAllSongs()
      } else {
        // using input bar
        if(newProps.searchModel !== this.props.searchModel){
          this.getAllSongs();
        }
        if(newProps.songs && newProps.songs.length){
          this.setState({ songs: newProps.songs })
        } else {
          this.setState({songs: this.state.songs})
        }
      }
    }
    componentWillMount(){
      if(this.props.parent !== 'writers') this.getAllSongs();
    }
    render() {
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
export default DragDropContext(HTML5Backend)(SongsContainer);
