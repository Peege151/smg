import React, { Component } from 'react';

import { styles } from './styles.js';
import { css } from 'aphrodite';
import {
  Link
} from 'react-router-dom'

import Login from '../Login/Login.js';
import ModalContainer from '../../Containers/ModalContainer/ModalContainer.js';

let ROUTES = [
  { title: 'SEARCH', active: true, href: '/' },
  { title: 'ABOUT', active: false, href: '/about' },
  { title: 'CONTACT', active: false, href: '/contact' },
  { title: 'LOGIN', href: '/login', active: false },
];
class Navbar extends Component {
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

    generateIcons = () => {
      let icons = ['list']
      return icons.map(icon => {
        return (
          <div key={icon} className={css(styles.icon)}
            onClick={this.props.openSongActionModal.bind(null, 'playlist', null)}>
            <i className={`fa fa-${icon}`} />
          </div>
        )
      })
    }

    componentWillReceiveProps(newProps){
      console.log('WRP in Navbar', newProps);
    }

    componentWillMount(){
      let token = this.props.token;
      ROUTES.forEach((route, idx) => {
        if(route.href === this.props.location.pathname) {
          this.setState({active: idx});
        }
      })
    }

    renderUserBar = () => {
      let icons = this.generateIcons();
      return (
        <div className={css(styles.userbar)}> { icons } </div>
      )
    }
    renderRoutes = () => {
      let routes = ROUTES;
      let loggedIn = this.props.token ? true : false;
      if (loggedIn) ROUTES.splice(ROUTES.length - 1, 1, { title: 'LOGOUT', href: '/logout', active: false })
      if (!loggedIn) ROUTES.splice(ROUTES.length - 1, 1,  { title: 'LOGIN', href: '/login', active: false })

      return routes.map( (route, index) => {
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
    }

    render() {
        let userbar;
        let loggedIn = this.props.token ? true : false;

        if (loggedIn) userbar = this.renderUserBar();
        let routes = this.renderRoutes(ROUTES)
        return (
          <div className={css(styles.outer)}>
            { this.props.modal ? <ModalContainer { ...this.props } /> : null }
            { userbar }
            <div className={css(styles.wrapper)}>
              { routes }
            </div>
          </div>
      );
    }
}

export default Navbar;
