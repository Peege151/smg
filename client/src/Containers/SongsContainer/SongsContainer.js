import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';

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
        paused: undefined ,
      };
    }

    toggleAudio = (song) => {
      if(!this.props.song){
        this.props.toggleAudio(song);
      } else if (this.state.paused && (this.props.playing !== song._id)){
        this.setState({paused: false});
        this.props.toggleAudio(song);
      }
      else if (this.props.song._id !== song._id){
        this.props.toggleAudio(song)
      } else {
        this.props.toggleAudio(song)
        this.setState({ paused: true })
      }
    }

    beautifyFilters = (song) => {
      let categories = CATEGORIES.filter(cat => cat.selector === 'genres')[0].variants.map(vari => vari.value);
      let filters =  song.filters.map( filter => {
        if (categories.indexOf(filter) > -1 ){
          if (filter === 'hiphop-rap') filter = 'hip|hop';
          let letter = filter.split('')[0].toUpperCase();
          return filter.split('').map( (lett, idx) => {
            if (filter.split('')[idx - 1] === '_') return lett.toUpperCase();
            if (filter.split('')[idx - 1] === '-') return lett.toUpperCase();
            if (filter.split('')[idx - 1] === '|') return lett.toUpperCase();
            if (idx === 0) return letter;
            if (lett === '_') return " ";
            if (lett === '-') return " ";
            if (lett === '|') return '-';
            return lett;
          }).join('')
        }
        // this next line removes undefined values from the array, that arrived
        // there as a result of non-genre filter variants initially pushing undefined to array
      }).filter(i => i).join(' ')
      if (filters.length > 20){
        filters = filters.replace(/^(.{11}[^\s]*).*/, "$1...")
      } else {
        filters = filters.replace(/^(.{11}[^\s]*).*/, "$1")
      }
      return filters;
    };
    renderSongTable = () => {
      return this.state.songs.map( song => {
        let prettyFilters = this.beautifyFilters(song);
        let writers = song.writers.map(writer => writer.name)
        return (
          <div key={`${song.title}` } className={css(styles.rowWrapper)}>
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
            <div className={css(styles.innerSongRow)}>
              <div className={ css(styles.td, styles.songTitle) }> { song.title } </div>
              <div className={ css(styles.td) }> { writers.join(', ') }</div>
              <div className={ css(styles.td) }> { prettyFilters } </div>
              <div className={ css(styles.td) }> { song.tempo } BPM </div>
              <div className={ css(styles.td) }> { song.duration } </div>
            </div>
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
      fetch('http://api.shiftedmusicgroup.com/api/songs/', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      })
      .then(handleErrors)
      .then(data => {
        return data.json();
      })
      .then(json => {
        this.setState({ songs: json })
      })
      .catch(err => {
        this.setState({clientError: err.message})
      })
    }
    filterSongs = (newProps) => {
      console.log('the props', newProps);
      let filters =  [].concat(...Object.keys(newProps.selected).map(key => {return newProps.selected[key]}))
      console.log('FIltering with these filters', filters)
      if(filters.length){
        let query = filters.join('%20');
        //fetch('http://localhost:8081/api/songs/?include=' + query, {
        fetch('http://api.shiftedmusicgroup.com/api/songs/?include=' + query, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        })
        .then(handleErrors)
        .then(data => {
          return data.json();
        })
        .then(json => {
          this.setState({ songs: json })
        })
      } else {
        this.getAllSongs();
      }
    }
    componentWillReceiveProps = (newProps) => {
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
    }
    componentWillMount(){
      this.getAllSongs();
    }
    render() {
      let songs =  this.renderSongTable();
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
