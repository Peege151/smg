import React, { Component } from 'react';

import styles from './songActionStyles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner2.jpg';

class SongActions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeIcon: {},
        addingToPlaylist: false,
        sharing: false,
      };
    }
    setTooltip = (icon, event) => {
      this.setState({activeIcon: icon})
    }
    onClick = (value) => {
      console.log('Clicked STUFF', value, this.props);
      if(!this.props.token){
        this.props.openSongActionModal('login', this.props.hoveredSong._id)
        return;
      }
      if(value==='addToPlaylist'){ this.props.openSongActionModal('playlist', this.props.hoveredSong._id)}
      if(value === 'download'){
        console.log('DOWNLOAD CALLED', this.props)
        fetch(this.props.hoveredSong.files[0].url)
        // res is the beginning of a request it only gets the response headers
        // here you can use .blob() .text() .json or res.arrayBuffer() depending
        // on what you need, if it contains Content-Type: application/json
        // then you might want to choose res.json()
        // all this returns a promise
        .then(res => res.blob())
        .then(blob => {
          let a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = this.props.hoveredSong.files[0].title + '.mp3';
          document.body.appendChild(a);
          a.click();
        });
      }
      if(value === 'delete'){
        // this is not really apprp named
        let index = this.props.playlist.songs.findIndex( item => item._id === this.props.hoveredSong)
        console.log('Index ?', index)
        let songs = this.props.playlist.songs
        console.log('Songs? ', songs, this.props.playlist.songs)
        if(index > -1 ) songs.splice(index, 1);

        let playlist = Object.assign({}, this.props.playlist)
        playlist.songs = songs;
        this.props.submitModal('playlist', 'put', playlist);
      }
    }
    determineIconsToRender = () => {
      let p = this.props;
      let ICONS = [
        {class: 'fa fa-list-ul', tooltip: 'Add To Playlist', value: 'addToPlaylist'},
        {class: 'fa fa-download', tooltip: 'Download Song For Trial', value: 'download' },
        //{class: 'fa fa-paper-plane', tooltip: 'Share Song', value: 'share' },
      ]
      if(p.context === 'playlist' && p.token && p.token.user._id === p.playlist.createdBy._id){
        //allow delete
        ICONS.push({class: 'fa fa-trash', tooltip: 'Remove From Playlist', value: 'delete'})
      }
      return ICONS
    }
    renderIcons = (icons) => {
      return icons.map(icon => {
        return (
          <div
            key={icon.value}
            onMouseEnter={this.setTooltip.bind(null, icon)}
            onMouseLeave={this.setTooltip.bind(null, {})}
            onClick={this.onClick.bind(null, icon.value)}
            className={css(
              styles.iconWrap,
              icon.value === this.state.activeIcon.value && styles.activeIcon

            )}
          >
            <i className={icon.class} />
          </div>

        )
      })
    }
    render() {
      let iconsToRender = this.determineIconsToRender()
      let icons = this.renderIcons(iconsToRender)
      let tooltip = this.state.activeIcon ? this.state.activeIcon.tooltip : null
      return (
        <div className={css(styles.wrapper)}>
          { tooltip ? <div> { tooltip } </div> : null}
          { icons }
        </div>
      )
    }
}


export default SongActions;
