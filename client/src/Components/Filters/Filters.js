import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './styles.js';
import { CATEGORIES } from '../FilterHeaders/categories.js';

import VibeDescriptor from '../VibeDescriptor/VibeDescriptor.js';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
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
        vibeDescriptors: this.props.vibeDescriptors,
        showingVibeContexts: false,
        showingDescriptorMenu: false,
      }
    }

    generateOptionCategories(){
      return VIBE_DESCRIPTOR_LIMIT.map((index) => {
        return (
          <VibeDescriptor
            key={'vibedescriptor' + index}
            descriptorIndex={index}
            selectFilter={ this.props.selectFilter }
            clearVibe={ this.props.clearVibe }
            showingDescriptorMenu={ this.state.showingDescriptorMenu }
            vibeDescriptors={ this.props.vibeDescriptors }
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

    showVibeContexts = () => {
      this.setState({ showingVibeContexts: !this.state.showingVibeContexts })
    }

    setVibeContext = (index) => {
      this.setState({ activeVibeContext: index })
    }

    createFilters(){
      let category = CATEGORIES[this.props.activeFilterIndex];
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
      } else if(category.selector === 'tempo'){
        return (
          <div className={css(styles.tempo)}>
          <p style={{textAlign: 'center', position:'relative', bottom: 50}}> Select Tempo Range </p>
          <InputRange
             maxValue={250}
             minValue={0}
             formatLabel={value => `${value} BPM`}
             value={this.props.tempoRange}
             onChange={(value) => {
               this.props.setTempo(value) }
             } />
          </div>
        )
      } else {
        return category.variants.map((variant, idx) => {
          return (
            <div key={ 'category' + variant.title } className={css(styles[category.selector])}>
              <div
                onClick={this.props.selectFilter.bind(null, {category, variant}, null)}
                className={css(
                  styles.inner,
                  window.innerWidth < 768 && styles[category.selector + 'Mobile'],
                  this.props.excluded[category.selector].indexOf(variant.value) > -1 && styles.excluded,
                  this.props.selected[category.selector].indexOf(variant.value) > -1 && styles.active
              )}>
                { variant.title }
                { category.selector === 'tempo' ? <span> <br />{variant.speed} BPM </span> : null}
              </div>
            </div>
          )
        })
      }
    }

    render() {
      console.log('SELECTED FILTERS', this.props);
      let filters = this.createFilters(this.props.activeFilterIndex);
      return (
        <div className={ css(styles.filtersWrapperOuter) }>
          <div className={ css(styles.filtersWrapperInner) }>
            { filters }
            <div className={css(styles.clearFilters)}>
              <span onClick={this.props.removeFilters.bind(this)}> Clear All </span>
            </div>
          </div>
        </div>
      );
    }
}

export default Filters;
