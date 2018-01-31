import React, { Component } from 'react';

import { styles } from './styles.js';
import { css } from 'aphrodite';
import {
  Link
} from 'react-router-dom'

import Login from '../Login/Login.js';

let routes = [
  { title: 'SEARCH', active: true, href: '/' },
  { title: 'ABOUT', active: false, href: '/about' },
  { title: 'CONTACT', active: false, href: '/contact' },
  { title: 'LOGIN', active: false, href: '/login', component: Login }
];
class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0,
        invert: false
      };
    }

    onClick(index) {
      this.setState({active: index})
    }
    componentWillMount(){
      console.log('GOING TO MOUNT INITIALLY', this.props)
      routes.forEach((route, idx) => {
        if(route.href === this.props.location.pathname) {
          this.setState({active: idx});
        }
      })
    }
    // componentWillReceiveProps(newProps){
    //   console.log('Getting Props', newProps)
    //   if(newProps.location.pathname === '/contact') {
    //     this.setState({ invert: true })
    //   } else {
    //     this.setState({ invert: false })
    //   }
    // }
    render() {
      console.log('Props are here?', this.props.location.pathname)
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
                    this.state.invert && styles.invert
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
