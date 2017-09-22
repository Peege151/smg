import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';

class VibeDescriptor extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    click(){
      this.setState({});
    }

    render() {

      return (
        <span>
          {
            this.props.descriptorIndex <= this.props.mostAdvancedDescriptor
            ?
              <div className={css(styles.vibe)}>
                <span className={css(styles.absoluteText)}>
                  { this.props.descriptorIndex === 0 ? `Is`:`And` }
                </span>
                <div className={css(styles.inner)}> + </div>
              </div>
            :
            <div className={css(
              styles.vibe,
              styles[this.props.descriptorIndex]

            )}>
              <span className={css(styles.absoluteText)}>
              </span>
              <div className={css(styles.inner)}>  </div>
            </div>
          }
        </span>
      );
    }
}

export default VibeDescriptor;
