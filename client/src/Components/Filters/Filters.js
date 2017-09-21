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
      this.state = {
        activeVibeContext: 0,
        vibeAdjectives: 0,
        showingVibeContexts: false,
        mostAdvancedDescriptor: 0,
      }
    }

    generateOptionCategories(){
      return VIBE_DESCRIPTOR_LIMIT.map((index) => {
        return (<VibeDescriptor key={'vibedescriptor' + index}/>)
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
              <div className={css(styles.inner)}>
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
        <div className={css(styles.filtersWrapper)}>
          { filters }
        </div>
      );
    }
}

export default Filters;
