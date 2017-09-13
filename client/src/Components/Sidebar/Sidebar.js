import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

const routes = ['SEARCH', 'BROWSE', 'ABOUT SMG'];
class Sidebar extends Component {
    render() {
      const headers = routes.map( route => {
        return <h3 key={route}> {route} </h3>;
      })
        return (
          <div className={css(styles.wrapper)}>
            { headers }
          </div>
      );
    }
}

export default Sidebar;
