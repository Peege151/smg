import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import bgimage  from './../../assets/speaker.jpg';

import Searchbar from '../../Components/Searchbar/Searchbar.js';
import FilterHeaders from '../../Components/FilterHeaders/FilterHeaders.js';
import Filters from '../../Components/Filters/Filters.js';

import SongsContainer from '../SongsContainer/SongsContainer';
import { CATEGORIES } from '../../Components/FilterHeaders/categories.js';

class SearchContainer extends Component {
    constructor(props) {
      super(props);
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
      });
      this.state = {
        method: 'filter',
        activeFilterIndex: 0,
        selected: obj,
        vibeDescriptors: [],
      };
    }

    apply(str){
      this.setState({method: str})
    }

    clearVibe = (idx, e) => {
      e.stopPropagation();
      let array = this.state.vibeDescriptors.slice();
      array.splice(idx, 1);
      this.setState({vibeDescriptors: array})
    }
    removeFilters = (e) => {
      console.log('e', e)
      e.stopPropagation();
      console.log('Removing Filters')
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
      });
      console.log('Object Post Clear?', obj)
      this.setState({selected: obj}, () => console.log('State?', this.state));
    }
    selectFilter = (data) => {
      let { category, variant, vibeIndex } = data;
      let showingDescriptorMenu = false;
      let vibeDescriptors = this.state.vibeDescriptors;
      let categoryObject = Object.assign(this.state.selected);

      if ( categoryObject[category.selector].indexOf(variant.value) === -1 ) {
        categoryObject[category.selector].push(variant.value)
      } else {
        console.log('Removing From Index', this.state.selected[category.selector].indexOf(variant.value))
        categoryObject[category.selector].splice(this.state.selected[category.selector].indexOf(variant.value), 1);
      }
      if ( category.selector === 'vibe' ) {
        vibeDescriptors.splice(vibeIndex, 1, variant);
      }
      this.setState({
        selected: categoryObject,
        showingDescriptorMenu: showingDescriptorMenu,
        vibeDescriptors: vibeDescriptors
      })
    }

    setActiveFilter = (index) => {
      console.log('Setting Active Index', index);
      this.setState({activeFilterIndex: index})
    }

    render() {
      let props = this.props;
      console.log('Search Container Props', this.props );
      return (
        <div className={ css(styles.wrapper) }>
          <img src={bgimage} className={css(styles.banner)} alt="logo" />
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
              onClick={() => alert('Coming Soon...')}
            >
              Search
            </button>
          </div>
          { this.state.method === 'search'
            ?
            <Searchbar />
            :
            <div className={css(styles.filterContainerWrapper)}>
              <FilterHeaders selected={ this.state.selected } setActiveFilter={this.setActiveFilter} activeFilterIndex={ this.state.activeFilterIndex } />
              <Filters removeFilters={this.removeFilters} clearVibe={ this.clearVibe } vibeDescriptors={this.state.vibeDescriptors} selected={ this.state.selected } selectFilter={ this.selectFilter } activeFilterIndex={ this.state.activeFilterIndex } />
            </div>
          }
          <SongsContainer {...props}{...this.state}/>
          <div className={css(styles.songNote)}>
            <p>If you have any questions, feel free to contact us at any time.  We rep 100% of all tracks here  </p>
          </div>
        </div>
      );
    }
}
export default SearchContainer;
