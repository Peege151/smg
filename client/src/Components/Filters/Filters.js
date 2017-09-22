import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './styles.js';
import { CATEGORIES } from '../FilterHeaders/categories.js';

import VibeDescriptor from '../VibeDescriptor/VibeDescriptor.js';

const VIBE_CONTEXTS = ['STORY', 'CHARACTER', 'PROJECT' ];
const VIBE_DESCRIPTOR_LIMIT = [0,1,2];

class Filters extends Component {
    constructor(props) {
      super(props);
      let obj = {};
      CATEGORIES.forEach((cat, index) => {
        let key = cat.selector;
        obj[key] = [];
      });
      this.state = {
        activeVibeContext: 0,
        vibeDescriptors: [],
        showingVibeContexts: false,
        showingDescriptorMenu: false,
        selected: obj
      }
    }

    generateOptionCategories(){
      return VIBE_DESCRIPTOR_LIMIT.map((index) => {
        return (
          <VibeDescriptor
            key={'vibedescriptor' + index}
            descriptorIndex={index}
            vibeDescriptors={ this.state.vibeDescriptors }
            selectFilter={ this.selectFilter }
            showingDescriptorMenu={ this.state.showingDescriptorMenu }
            />
          )
      });
    }

    generateVibeContextList = () => {
      return VIBE_CONTEXTS.map((vibe, index) => {
        return (
          <div
            key={ vibe }
            onClick={ this.setVibeContext.bind(null, index) }
            className={css(styles.vibeContexts)}>
            <span className={css(styles.innerVibeContext)}> { vibe } </span>
          </div>
        )
      })
    }

    selectFilter = (data) => {
      let { category, variant } = data;
      let showingDescriptorMenu = false;
      let vibeDescriptors = this.state.vibeDescriptors;
      let categoryObject = Object.assign(this.state.selected);

      if ( categoryObject[category.selector].indexOf(variant.value) === -1 ) {
        categoryObject[category.selector].push(variant.value)
      } else {
        console.log('Removing From Index', this.state.selected[category.selector].indexOf(variant.value))
        categoryObject[category.selector].splice(this.state.selected[category.selector].indexOf(variant.value), 1);
      }
        console.log('New State => ', this.state);
      if (category.selector === 'vibe') {
        vibeDescriptors.push(variant);
      }
      this.setState({
        selected: categoryObject,
        showingDescriptorMenu: showingDescriptorMenu,
        vibeDescriptors: vibeDescriptors
      })
    }

    showVibeContexts = () => {
      this.setState({ showingVibeContexts: !this.state.showingVibeContexts })
    }

    setVibeContext = (index) => {
      this.setState({ activeVibeContext: index })
    }

    createFilters(){
      let category = CATEGORIES[this.props.activeFilterIndex];
      console.log('Category? ', category);

      if(category.selector === 'vibe'){
        return (
          <div>
            <div
              onClick={ this.showVibeContexts }
              className={css(
                styles.vibe,
                this.state.activeVibeContext > -1 && styles.active
            )}>
              { this.state.showingVibeContexts
                ?
                  <div className={ css(styles.vibeContextWrapper)} >
                    { this.generateVibeContextList() }
                  </div>
                :
                  <div className={css(styles.inner)}>
                    <span className={css(styles.absoluteText)}> My </span>
                    <div> { VIBE_CONTEXTS[this.state.activeVibeContext] }</div>
                  </div>
              }
            </div>
            { this.generateOptionCategories() }
          </div>
        )
      } else {
        return category.variants.map((variant, idx) => {
          return (
            <div key={ 'category' + variant.title } className={css(styles[category.selector])}>
              <div
                onClick={this.selectFilter.bind(null, {category, variant}, null)}
                className={css(
                  styles.inner,
                  this.state.selected[category.selector].indexOf(variant.value) > -1 && styles.active
              )}>
                { variant.title }
                { category.selector === 'tempo' ? <span> <br />{variant.value} BPM </span> : null}
              </div>
            </div>
          )
        })
      }
    }

    render() {
      let filters = this.createFilters(this.props.activeFilterIndex);
      return (
        <div className={ css(styles.filtersWrapperOuter) }>
          <div className={ css(styles.filtersWrapperInner) }>
            { filters }
          </div>
        </div>
      );
    }
}

export default Filters;
