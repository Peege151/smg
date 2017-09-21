import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import bgimage  from './../../assets/speaker.jpg';

import Searchbar from '../../Components/Searchbar/Searchbar.js';
import FilterHeaders from '../../Components/FilterHeaders/FilterHeaders.js';
import Filters from '../../Components/Filters/Filters.js';
class SearchContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        method: 'filter',
        activeFilterIndex: 0
      };
    }

    apply(str){
      this.setState({method: str})
    }

    setActiveFilter = (index) => {
      console.log('Setting Active Index', index);
      this.setState({activeFilterIndex: index})
    }

    render() {
      console.log('Active Filter Index', this.state.activeFilterIndex );
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
              onClick={() => this.apply('search')}
            >
              Search
            </button>
          </div>
          { this.state.method === 'search'
            ?
            <Searchbar />
            :
            <div className={css(styles.filterContainerWrapper)}>
              <FilterHeaders setActiveFilter={this.setActiveFilter} activeFilterIndex={ this.state.activeFilterIndex } />
              <Filters activeFilterIndex={ this.state.activeFilterIndex } />
            </div>
          }
        </div>
      );
    }
}
export default SearchContainer;
