import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

import Searchbar from '../../Components/Searchbar/Searchbar.js';
import SearchCategories from '../../Components/SearchCategories/SearchCategories.js';

class SearchContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }

    render() {
        return (
          <div className={ css(styles.wrapper) }>
            <Searchbar />
            <SearchCategories />
          </div>
      );
    }
}

export default SearchContainer;
