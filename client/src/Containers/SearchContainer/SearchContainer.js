import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import bgimage  from './../../assets/banner_speaker.jpg';
import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';
import helpers from './helpers';

import Actions from './../../'

import Searchbar from '../../Components/Searchbar/Searchbar.js';
import FilterHeaders from '../../Components/FilterHeaders/FilterHeaders.js';
import Filters from '../../Components/Filters/Filters.js';
import WriterContainer from './WriterContainer/WriterContainer.js';
import SongsContainer from '../SongsContainer/SongsContainer';


import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

function serializeData(data) {
  console.log('Data?', data);
    let array = []
    //writers or all was called
    data.forEach(resource => {
      if(resource.songs){
        resource.songs.forEach(song => {
          array.push(song)
        });
      } else if(resource.tempo){
        //artists was called
        array = data;
      } else {
        console.log('Data for artists', resource)
        resource.albums.forEach(function(album){
          console.log('album', album)
          array = [...album.songs]
        })
      }
    });
    console.log('Returning Array', array);
    return array;
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

class SearchContainer extends Component {
    constructor(props) {
      super(props);
      let obj = {};
      let excluded = {}
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
        excluded[key] = [];
      });
      this.state = {
        method: 'filter',
        activeFilterIndex: 0,
        selected: obj,
        excludeSelected: excluded,
        vibeDescriptors: [],
        searchModel: 'writers',
        songs: undefined,
        tempoRange: { min: 60, max: 120 }
      };
    }

    apply(str){
      this.setState({method: str, songs: undefined})
    }

    changeSearchModel = (evt) => {
      console.log('Search model', this.props)

      this.setState({searchModel: evt.target.value, songs: undefined})
      let search = document.getElementById('thesearchbar');
      search.value = ''
    }

    onInputEntry = (evt) => {
      // SEARCH
      console.log('Val', evt.target.value)
      if(evt.target.value){
        //fetch(` https://smg-api.herokuapp.com/api/${this.state.searchModel}/search/${evt.target.value}`,{
        fetch(`http://localhost:8081/api/${this.state.searchModel}/search/${evt.target.value}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        })
        .then(handleErrors)
        .then(data => {
          return data.json();
        })
        .then(data => {
          let songs = serializeData(data)
          this.setState({songs})
        })
      } else {
        // The searchbar is empty, so lets get all songs
        //fetch(`https://smg-api.herokuapp.com/api/songs`,{
        fetch(`http://localhost:8081/api/songs/`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        })
        .then(handleErrors)
        .then(data => {
          return data.json();
        })
        .then(data => {
          this.setState({songs: data })
        })
      }
    }

    clearVibe = (idx, e) => {
      e.stopPropagation();
      let array = this.state.vibeDescriptors.slice();
      array.splice(idx, 1);
      let newArr = array.map(item => item.value);
      let selected = Object.assign({}, this.state.selected);
      selected.vibe = newArr;
      this.setState({vibeDescriptors: array, selected}, () => {console.log('Cleared Vibe, filters left', this.state.selected)})
    }

    removeFilters = (e) => {
      e.stopPropagation();
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
      });
      this.setState({selected: obj, vibeDescriptors: []}, () => console.log('State?', this.state));
    }
    setTempo = (range) => {
        this.setState({tempoRange: range})
    }
    selectFilter = (data) => {
      let { category, variant, vibeIndex } = data;
      let showingDescriptorMenu = false;
      let vibeDescriptors = this.state.vibeDescriptors;
      let categoryObject = Object.assign({}, this.state.selected);
      let excludedCategoryObject = Object.assign({}, this.state.excludeSelected);
      // Three click filter system.  First click adds it to selected, second adds it to excluded
      // Third click removes it from both.  The below if statement checks and assigns.
      if( categoryObject[category.selector].indexOf(variant.value) === -1 && excludedCategoryObject[category.selector].indexOf(variant.value) === -1 ) {
        categoryObject[category.selector].push(variant.value)
        // this.props.history.push('/')
        // var separator = (window.location.href.indexOf("?")===-1)?"?":"&";
        // window.history.pushState({}, 'Searching',  window.location.href + separator + "query");
      } else if (excludedCategoryObject[category.selector].indexOf(variant.value) > -1){
        excludedCategoryObject[category.selector].splice(this.state.excludeSelected[category.selector].indexOf(variant.value), 1);
      } else if (categoryObject[category.selector].indexOf(variant.value) > -1) {
        categoryObject[category.selector].splice(this.state.selected[category.selector].indexOf(variant.value), 1);
        excludedCategoryObject[category.selector].push(variant.value);
        console.log( 'SPLICING OUT CATEGORY', categoryObject[category.selector].indexOf(variant.value) );
      }
      if ( category.selector === 'vibe' ) {
        vibeDescriptors.splice(vibeIndex, 1, variant);
      }
      this.setState({
        excludeSelected: excludedCategoryObject,
        selected: categoryObject,
        showingDescriptorMenu: showingDescriptorMenu,
        vibeDescriptors: vibeDescriptors
      })
    }

    setActiveFilter = (index) => {
      this.setState({activeFilterIndex: index})
    }
    openWriterContainer = (writer) => {
      console.log('Viewing', writer);
      this.setState({viewingWriter: writer._id})
    }
    renderButtons = () => {
      return (
        <div className={css(styles.buttonContainer)}>
          <button
            className={css(
              styles.button,
              this.state.method === 'filter' && styles.active
            )}
            onClick={() => this.apply('filter')}
          >
            Filter
          </button>
          <button
            className={css(
              styles.button,
              this.state.method === 'search' && styles.active
            )}
            onClick={() => this.apply('search')}
          >
            Search
          </button>
        </div>
      )
    }

    render() {
      let props = this.props;
      let Buttons = this.renderButtons();
      console.log('STATE OF SEARCHCONTAINER', this.state)
      return (
        <div className={ css(styles.wrapper) }>
          <img src={bgimage} className={css(styles.banner)} alt="logo" />
            {Buttons}
          { this.state.method === 'search'
            ?
            <div className={css(styles.filterContainerWrapper)}>
              <Searchbar onInputEntry={ this.onInputEntry } changeSearchModel={ this.changeSearchModel }/>
            </div>
            :
            <div className={css(styles.filterContainerWrapper)}>
              <FilterHeaders excluded={this.state.excludeSelected} selected={ this.state.selected } setActiveFilter={this.setActiveFilter} activeFilterIndex={ this.state.activeFilterIndex } />
              <Filters setTempo={this.setTempo} tempoRange={this.state.tempoRange} removeFilters={this.removeFilters} clearVibe={ this.clearVibe } vibeDescriptors={this.state.vibeDescriptors} excluded={ this.state.excludeSelected } selected={ this.state.selected } selectFilter={ this.selectFilter } activeFilterIndex={ this.state.activeFilterIndex } />
            </div>
          }
          <SongsContainer openWriterContainer={this.openWriterContainer} {...props}{...this.state}/>
          <div className={css(styles.songNote)}>
            <p>If you have any questions, feel free to contact us at any time.  We rep 100% of all tracks here  </p>
          </div>

        </div>
      );
    }
}
export default SearchContainer;
