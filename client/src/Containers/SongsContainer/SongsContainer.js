import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Song from '../../Components/Song/Song.js';
import SongActions from '../../Actions/SongActions.js';

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
    getWidthOfHeader = (numColumns, header) => {
      let base = 100 / numColumns;
      if(numColumns === 5 ){
        if(header === 'Name') return  base * 1.333 + '%';
        if(header === 'Writer') return base * 1.333 + '%'
        if(header === 'Genres') return base * 1.333 + '%'
        if(header === 'Tempo') return base /2 + '%'
        if(header === 'Length') return base /2  + '%'
      } else if( numColumns === 6){
        if(header === 'Name') return  Math.floor(base * 1.333) + '%';
        if(header === 'Writer') return Math.floor(base * 1.333) + '%'
        if(header === 'Genres') return base + '%'
        if(header === 'Tempo') return base /2 + '%'
        if(header === 'Length') return base /2  + '%'
        if(header === 'Added_By') return base * 1.33 + '%'

      }
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
      console.log('Ok', songs)
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
      let NEW_HEADERS = [].concat(HEADERS);
      if(this.props.context === 'playlist') NEW_HEADERS.push('Added_By');
      return NEW_HEADERS.map( header => {
        let width = this.getWidthOfHeader(NEW_HEADERS.length, header)
        return (
          <div key={header} className={css(
            styles.header,
          )} style={{width: width}}>
            { header.split('_').join(' ') }
          </div>
        )
      })
    }
    getAllSongs = () => {
      SongActions.getAllSongs()
      .then(json => {
        this.setState({ songs: json })
      })
      .catch(err => { this.setState({clientError: err.message}) })
    }
    filterSongs = (nP) => {
      if(nP.method === 'filter'){
        let included = [].concat(...Object.keys(nP.selected).map(key => { return nP.selected[key] }))
        let tempoString = `&tempo=${nP.tempoRange.min}-${nP.tempoRange.max}`
        let excluded = [].concat(...Object.keys(nP.excludeSelected).map(key => { return nP.excludeSelected[key] }))
        //excluded = helpers.prependNo__(excluded);
        if(included.length || excluded.length || tempoString){
          let includeQuery = included.join('%20');
          let excludeQuery = excluded.join('%20');
          SongActions.filterSongs(includeQuery, excludeQuery, tempoString)
          .then(json => {   this.setState({ songs: json }) })
        } else {
          this.getAllSongs();
        }
      } else {
        this.getAllSongs();
      }
    }
    componentWillReceiveProps = (newProps) => {
      if(newProps.method === 'filter' && this.props.method === 'filter'){
        let oldFilters = [].concat(...Object.keys(this.props.selected).map(key => {return this.props.selected[key]}))
        let newFilters = [].concat(...Object.keys(newProps.selected).map(key => {return newProps.selected[key]})).filter(Boolean)
        if (oldFilters.length !== newFilters.length) {
          this.filterSongs(newProps);
        } else {
          this.filterSongs(newProps);
        }
        //if(!newFilters.length) this.getAllSongs()
      } else if( newProps.method === 'filter' && this.props.method !=='filter'){
        console.log('Moved to Filter From Search');
        //this.getAllSongs()
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
      console.log('Song Container PL', this.props, this.state)
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
