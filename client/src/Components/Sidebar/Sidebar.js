import React, { Component } from 'react';

import { styles } from './styles.js';
import { css } from 'aphrodite';
import {
  Link
} from 'react-router-dom'

import Login from '../Login/Login.js';
import Browse from '../Browse/Browse.js';

let routes = [
  { title: 'SEARCH', active: true, href: '/' },
  // { title: 'ABOUT SMG', active: false, href: '/about' },
  { title: 'LOGIN', active: false, href: '/login', component: Login }
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
          <span className={css(styles.innerWrapper)} onClick={() => this.onClick(index)} key={index + '1'}> &nbsp;
            <Link
                className={css(styles.link)}
                to={route.href}
              >
              <h3
                  className={css(
                    styles.item,
                    this.state.active === index  && styles.active,
                  )}>
                     {route.title}
              </h3>
            </Link>
          </span>

        )
      })
        return (
          <div className={css(styles.wrapper)}>
            { headers }
          </div>
      );
    }
}

export default Sidebar;
