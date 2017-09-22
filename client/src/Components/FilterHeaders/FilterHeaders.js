import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';
import { CATEGORIES } from './categories.js';

class FilterHeaders extends Component {
    constructor(props) {
      super(props);
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
      });
      this.state = {
        collapsed: 0,
        selected: obj
      }
    }

    clearSearch(){
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        console.log(key)
        obj[key] = [];
      });
      this.setState({selected: obj});
    }
    filterClick(idx){
      this.setState({collapsed: idx});
    }

    render() {
      let headers = CATEGORIES.map((category, index) => {
        return (
          <div
            onClick={() => this.props.setActiveFilter(index)}
            key={ 'category' + category.title }
            className={css(styles.header)}
          >
            <div className={css(
              styles.innerHeader,
              this.props.activeFilterIndex === index && styles.active
            )}>
              { category.title }
            </div>
          </div>
        )
      })
      return (
        <div className={css(styles.wrapper)}>
          <div className={css(styles.headerWrapper)}>
            { headers }
          </div>
          <div className={css(styles.buttonSpacer)}></div>
        </div>
      );
    }
}

export default FilterHeaders;
