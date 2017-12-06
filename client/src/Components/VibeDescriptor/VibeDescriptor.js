import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';
import { CATEGORIES } from '../FilterHeaders/categories.js';


class VibeDescriptor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showingMenu: this.props.showingDescriptorMenu
      }
    }
    openDescriptorMenu = () => {
      this.setState({showingMenu: !this.state.showingMenu})
    }

    generateDescriptorItems = () => {
      let category = CATEGORIES.filter(cat => cat.selector === 'vibe')[0];
      return category.variants.map((variant)=>{
        return (
          <div
            onClick={ this.props.selectFilter.bind(null, {category, variant, vibeIndex: this.props.descriptorIndex })}
            key={ variant.value }
            className={ css(styles.descriptorItems) }>
              <span className={ css(styles.descriptorInner)}> { variant.title } </span>
          </div>
        );
      })
    }

    render() {
      let descriptorItems = []
      descriptorItems = this.generateDescriptorItems()
      return (
        <div>
          {
            this.props.descriptorIndex <= this.props.vibeDescriptors.length
            ?
            <div>
              {
                this.state.showingMenu
                ?
                <div onClick={ this.openDescriptorMenu } className={css(styles.descriptorMenuWrapperOuter)}>
                  <div className={css(styles.descriptorMenuWrapperInner)}>
                    { descriptorItems }
                  </div>
                </div>
                :
                <div>
                  { this.props.vibeDescriptors.length  && this.props.vibeDescriptors.length > this.props.descriptorIndex
                  ?
                  <div onClick={ this.openDescriptorMenu } className={css(
                    styles.activeVibe,
                    styles['vibe' + this.props.descriptorIndex]
                  )}>
                    <span className={css(styles.absoluteText)}>
                      { this.props.descriptorIndex === 0 ? `Is`:`And` }
                    </span>

                    <div className={css(styles.inner)}>
                      <div onClick={ this.props.clearVibe.bind(this.props.descriptorIndex, this.props.descriptorIndex) } className={css(styles.clearVibe) }>
                        -
                      </div>
                      { this.props.vibeDescriptors[this.props.descriptorIndex].title }
                    </div>
                  </div>
                  :
                  <div onClick={ this.openDescriptorMenu } className={css(styles.vibe)}>
                    <span className={css(styles.absoluteText)}>
                    { this.props.descriptorIndex === 0 ? `Is`:`And` }
                    </span>
                    <div className={css(styles.inner)}> + </div>
                  </div>
                  }
                </div>
              }
            </div>
            :
            <div className={css(
              styles.vibe,
              styles[this.props.descriptorIndex]
            )}>
            </div>
          }
        </div>
      );
    }
}

export default VibeDescriptor;
