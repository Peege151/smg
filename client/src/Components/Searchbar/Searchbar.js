import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

const routes = [
  {title: 'Search By Title'},
  {title: 'Search By Artist'},
  {title: 'Search By Writer'}
]
class Searchbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0,
        searchModel: 'writers' // match the initial option
      };
    }
    onClick(index){
      this.setState({active: index});
    }

    search(){
      console.log('TODO -- Add Actions ');
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
          <input
            id='thesearchbar'
            placeholder='Search Catalog Database...'
            onChange={ this.props.onInputEntry }
            className={css(styles.searchbar)}
            />
          <select className={css(styles.searchModel)} onChange={this.props.changeSearchModel}>
            <option value='writers'> Writers </option>
            <option value='artists'> Artists </option>
            <option value='songs'> Songs </option>
          </select>
        </div>
      );
    }
}

export default Searchbar;
