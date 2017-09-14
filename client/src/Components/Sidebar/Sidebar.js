import React, { Component } from 'react';
import logo from './../../assets/logo-black.png';

import styles from './styles.js';
import { css } from 'aphrodite';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Browse from '../Browse/Browse.js';

let routes = [
  { title: 'SEARCH', active: true, href: '/' },
  { title: 'BROWSE', active: false, href: '/browse', component: Browse },
  { title: 'ABOUT SMG', active: false, href: '/about' }
];

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }

    onClick(index) {
      console.log('ok route', index);
      this.setState({active: index})
    }

    render() {
      const headers = routes.map( (route, index) => {
        return (
            <div key={index + '1'}>
              <h3
                  onClick={() => this.onClick(index)}
                  className={css(
                    styles.item,
                    this.state.active === index  && styles.active,
                  )}>
                    <Link className={css(styles.link)} to={route.href}>
                     {route.title}
                    </Link>
              </h3>
            </div>
        )
      })
        return (
          <div className={css(styles.wrapper)}>
            <img src={logo} className={css(styles.logo)} alt="logo" />
              <div>
                { headers }
              </div>
          </div>
      );
    }
}

export default Sidebar;
