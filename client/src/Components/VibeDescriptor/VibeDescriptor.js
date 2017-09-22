import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';
import { CATEGORIES } from '../FilterHeaders/categories.js';


class VibeDescriptor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showingMenu: false,
      }
    }

    openDescriptorMenu = () => {
      console.log('BAM');
      this.setState({showingMenu: true})
    }

    generateDescriptorItems(){
      let vibeObject = CATEGORIES.filter(cat => cat.selector === 'vibe')[0];
      console.log('Vibe Obj', vibeObject);
      return vibeObject.variants.map((item)=>{
        return (
          <div key={item.value} className={css(styles.descriptorItems)}>
            <span className={ css(styles.descriptorInner)}> { item.title } </span>
          </div>
        )
      })

    }

    render() {
      let descriptorItems = []
      if (this.state.showingMenu) descriptorItems = this.generateDescriptorItems()
      return (
        <span>
          {
            this.props.descriptorIndex <= this.props.mostAdvancedDescriptor
            ?
            <div>
              {
                this.state.showingMenu
                ?
                <div onClick={ this.openDescriptorMenu } className={css(styles.descriptorMenuWrapperOuter)}>
                  <div onClick={ this.openDescriptorMenu } className={css(styles.descriptorMenuWrapperInner)}>
                    { descriptorItems }
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
            :
            <div className={css(
              styles.vibe,
              styles[this.props.descriptorIndex]

            )}>
              <div className={css(styles.inner)}>  </div>
            </div>
          }
        </span>
      );
    }
}

export default VibeDescriptor;
