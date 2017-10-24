import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import bgimage  from './../../assets/speaker.jpg';

import Searchbar from '../../Components/Searchbar/Searchbar.js';
import FilterHeaders from '../../Components/FilterHeaders/FilterHeaders.js';
import Filters from '../../Components/Filters/Filters.js';

import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';

function handleErrors(response) {
  console.log('Handle Errors', response);
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
      };
    }
    beautifyFilters = (song) => {
      return song.filters.map( filter => {
        let letter = filter.split('')[0].toUpperCase()
        return filter.split('').map( (lett, idx) => {
            if (idx === 0) return letter;
            return lett;
        }).join('')
      })
    };
    renderSongTable = () => {
      console.log('Props?', this.props);
      return this.state.songs.map( song => {
        let prettyFilters = this.beautifyFilters(song);
        let writers = song.writers.map(writer => writer.name)
        return (
          <div key={`${song.title}` } className={css(styles.rowWrapper)}>
            <div className={ css(styles.playButtonContainer)} onClick={this.props.toggleAudio.bind(null, song)}>
              <div className={ css(styles.playButton)}>
                <i className={`fa fa-play ${css(styles.playIcon)}`}></i>
              </div>
            </div>
            <div className={ css(styles.td, styles.songTitle) }> { song.title } </div>
            <div className={ css(styles.td) }> { writers.join(', ') }</div>
            <div className={ css(styles.td) }> { prettyFilters.join(' ') } </div>
            <div className={ css(styles.td) }> { song.tempo } BPM </div>
            <div className={ css(styles.td) }> { song.length || '2:45'} </div>
          </div>
        )
      })
    }
    renderHeaders = () => {
      return HEADERS.map( header => {
        return (
          <div className={css(
            styles.header,
            header === '' && styles.play
          )}>
            { header }
          </div>
        )
      })
    }
    filterSongs = () => {
      let filters =  [].concat(...Object.keys(this.props.selected).map(key => {return this.props.selected[key]}))
      if(filters.length){
        let query = filters.join('%20');
        fetch('http://api.shiftedmusicgroup.com/api/songs/?include=' + query, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        })
        .then(handleErrors)
        .then(data => {
          return data.json();
        })
        .then(json => {
          console.log('Data', json);
          this.setState({ songs: json })
        })
      }
    }
    componentWillReceiveProps = (newProps) => {
       let oldFilters = [].concat(...Object.keys(this.props.selected).map(key => {return this.props.selected[key]}))
       let newFilters = [].concat(...Object.keys(newProps).map(key => {return newProps[key]}))
       if (oldFilters.length !== newFilters.length) this.filterSongs()
    }
    componentWillMount(){
      fetch('http://api.shiftedmusicgroup.com/api/songs/', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      })
      .then(handleErrors)
      .then(data => {
        return data.json();
      })
      .then(json => {
        console.log('Data', json);
        this.setState({ songs: json })
      })
      .catch(err => {
        this.setState({clientError: err.message})
      })
    }

    render() {
      let songs =  this.renderSongTable();
      let headers = this.renderHeaders();
      console.log('Props On SongC', this.props);
      return (
        <div className={ css(styles.wrapper) }>
          <div className={css(styles.headerWrapper)}>
            { headers }
          </div>
          { songs }
        </div>
      );
    }
}
export default SongsContainer;
