import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';
import { CATEGORIES } from './categories.js';
import FA from 'react-fontawesome';

class SearchCategories extends Component {
    constructor(props) {
      super(props);
      let obj = {};
      let categoriesOfSelection = CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        console.log(key)
        obj[key] = [];
      });
      this.state = {
        collapsed:[0],
        selected: obj
      }
    }

    search(){
      console.log('TODO -- Add Actions ');
    }

    clearSearch(){
      let obj = {};
      let categoriesOfSelection = CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        console.log(key)
        obj[key] = [];
      });
      this.setState({selected: obj});
    }
    onCarrotClick(idx){
      let array = this.state.collapsed.slice()
      if(this.state.collapsed.indexOf(idx) > -1 ){
        array.splice(this.state.collapsed.indexOf(idx), 1);
      } else {
        array.push(idx);
      }
      this.setState({ collapsed: array }, () => {
      })
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
      })
    }

    returnArrow(index){
      return (
        <span>
          { this.state.collapsed.indexOf(index) > -1 ?
            <FA
              className={css(styles.arrows)}
              name='arrow-down'
              size='2x'
              onClick={() => this.onCarrotClick(index)}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            :
            <FA
              className={css(styles.arrows)}
              name='arrow-right'
              size='2x'
              onClick={() => this.onCarrotClick(index)}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          }
        </span>
      )
    }

    render() {
      let categories = CATEGORIES.map((category, index) => {
        return (
          <div key={ 'category' + category.title } className={css(styles[category.selector])}>
            <h5 className={css(styles.categoryTitle)}>
              { category.title }
                {this.returnArrow(index)}
            </h5>
            <hr />
            {
                this.state.collapsed.indexOf(index) > -1 ?
                  category.variants.map((variant, index) => {
                    return (
                      <div key={'variant' + index }
                      className={css(
                        styles.checkboxContainer,
                        category.inline === true  && styles.inlineCheckbox,
                      )}>
                        <input
                          onChange={() => {this.clickCheckbox(category, variant)}}
                          className={css(styles.checkbox)}
                          checked={this.state.selected[category.selector].indexOf(variant.value) > -1}
                          type='checkbox' />
                        <span> {variant.title} </span>
                      </div>
                    )
                  })
                :
                null
            }
          </div>
        )
      })
      return (
        <div className={css(styles.wrapper)}>
          { categories }
          <div className={css(styles.buttonSpacer)}></div>
          <div className={css(styles.buttonWrapper)}>
            <button onClick={() => this.clearSearch() } className={css(styles.buttons)}> Clear </button>
            <button onClick={() => this.search() } className={css(styles.buttons)}> Search </button>
          </div>
        </div>
      );
    }
}

export default SearchCategories;
