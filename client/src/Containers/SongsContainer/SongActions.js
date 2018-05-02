import React, { Component } from 'react';
import styles from './songActionStyles.js';
import { css } from 'aphrodite';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DownloadActions from '../../Actions/DownloadActions.js';
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'

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
      // TODO check the actual session
      if(!this.props.token){
        this.props.openSongActionModal('login', this.props.hoveredSong._id)
        return;
      }
      if(value === 'share'){
        alert('Sharing will be available in the next update May 2018') // TODO
      }
      if(value==='addToPlaylist'){ this.props.openSongActionModal('playlist', this.props.hoveredSong._id)}
      if(value === 'download'){
        console.log('DOWNLOAD CALLED', this.props)
        fetch(this.props.hoveredSong.files[0].url)
        .then(res => res.blob())
        .then(blob => {
          let a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = this.props.hoveredSong.files[0].title + '.mp3';
          document.body.appendChild(a);
          a.click();
        });
        DownloadActions.createDownload({song: this.props.hoveredSong._id, user: this.props.token.user._id})
      }
      if(value === 'delete'){
        // this is not really apprp named
        let index = this.props.playlist.songs.findIndex( item => item.song._id === this.props.hoveredSong._id )
        let songs = this.props.playlist.songs
        if(index > -1 ) songs.splice(index, 1);
        let playlist = Object.assign({}, this.props.playlist)
        playlist.songs = songs;
        console.log('Playlist Now', playlist)
        this.props.submitModal('playlist', 'put', playlist);
      }
    }

    determineIconsToRender = () => {
      let p = this.props;
      let ICONS = [
        { class: 'list-ul', tooltip: 'Add To Playlist', value: 'addToPlaylist'},
        { class: 'download', tooltip: 'Download Song For Trial', value: 'download' },
        { class: 'paper-plane', tooltip: 'Share Song', value: 'share' },
      ]
      if (p.context === 'playlist' && p.token && p.token.user._id === p.playlist.createdBy._id){
        //allow delete
        ICONS.push({class: 'trash-alt', tooltip: 'Remove From Playlist', value: 'delete'})
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
            <FontAwesomeIcon icon={icon.class}/>
          </div>
        )
      })
    }
    render() {
      let iconsToRender = this.determineIconsToRender();
      let tooltipOffsetWhenCentered = (window.innerWidth / 2) + (iconsToRender.length * 92 / 2);
      let tooltipOffset = this.props.context === 'individual' ? tooltipOffsetWhenCentered : iconsToRender.length * 92 // check songActionStyles for constant. Adding padding
      let icons = this.renderIcons(iconsToRender);

      let tooltip = this.state.activeIcon ? this.state.activeIcon.tooltip : null
      return (
        <div className={css(styles.songActionHoverWrapper)}>
          <div
            className={css(
              styles.innerSongActionHoverWrapper,
              this.props.context === 'individual' && styles.setCenter
            )}>
            { tooltip
              ?
                <div
                  style={{right: tooltipOffset}}
                  className={css(
                    styles.tooltip,
                    this.props.context === 'individual' && styles.setToolTipLeft
                  )}
                  >
                    { tooltip }
                </div>
              :
              null
            }
            { icons }
          </div>
        </div>
      )
    }
}


export default SongActions;
