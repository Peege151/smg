import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import  * as sidebarStyles from '../Sidebar/styles.js';


const routes = [
  {title: 'Search By Title'},
  {title: 'Search By Artist'},
  {title: 'Search By Writer'}
]
class Searchbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }
    onClick(index){
      this.setState({active: index});
    }
    render() {
      let items = routes.map((route, index) => {
        return (
          <li onClick={() => this.onClick(index)} key={index + 'searchnav'} className={css(styles.listItem)}>
            <h5 className={css(
              styles.routeItem,
              this.state.active === index  && styles.active,
            )}> { route.title } </h5>
          </li>
        );
      })
      return (
        <div className={css(styles.wrapper)}>
           <h3 className={css(sidebarStyles.styles.item)} > Search </h3>
           <ul className={css(styles.list)}>
             { items }
           </ul>
           <input className={css(styles.searchbar)} />
        </div>
      );
    }
}

export default Searchbar;
