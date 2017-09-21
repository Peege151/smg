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
        console.log(key)
        obj[key] = [];
      });
      this.state = {
        collapsed: 0,
        selected: obj
      }
    }

    search(){
      console.log('TODO -- Add Actions ');
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

    clickCheckbox(category, variant){
      let categoryObject = Object.assign(this.state.selected);
      if ( categoryObject[category.selector].indexOf(variant.value) === -1 ) {
        categoryObject[category.selector].push(variant.value)
      } else {
        console.log('Removing From Index', this.state.selected[category.selector].indexOf(variant.value))
        categoryObject[category.selector].splice(this.state.selected[category.selector].indexOf(variant.value), 1);
      }
      this.setState({selected: categoryObject}, () => {
        console.log('New State => ', this.state);
      });
    }

    render() {
      console.log('Prop in Headers', this.props);
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
          <div className={css(styles.buttonWrapper)}>
            <button onClick={() => this.clearSearch() } className={css(styles.buttons)}> Clear </button>
            <button onClick={() => this.search() } className={css(styles.buttons)}> Search </button>
          </div>
        </div>
      );
    }
}

export default FilterHeaders;
