import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import helpers from './helpers';
import SongActions from '../../Containers/SongsContainer/SongActions.js';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



import {
  Route,
  Link
} from 'react-router-dom'
import { flow } from 'lodash'

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    //connectDropTarget: connect.dropTarget(),
    // isOver: monitor.isOver()
  }
}

function collectTargets(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    // isOver: monitor.isOver()
  }
}

const songSource = {
  beginDrag(props) {
    return {
      id: props.data._id,
      index: props.idx,
    }
  },
}
const songTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex =  props.idx
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      console.log('Dragging Down')
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      console.log('Dragging Up')
      return
    }

    // Time to actually perform the action
    if(props.moveSong) {
      props.moveSong(dragIndex, hoverIndex)
    }

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  },
}

class Song extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    createClickableWriters = (song) => {
      return song.writers.map(writer => {
        if( this.props.context === 'playlist') writer.writer = writer; // this is shit. data is different in playlist for some reason
        return (
          <span key={writer._id}>
            <Link
              to={{ pathname:'/writer/' + writer.writer._id, state: {writer: writer}}}
              className={css(styles.clickableWriter)}
              onClick={ this.props.openWriterContainer ? this.props.openWriterContainer.bind(null, writer) : null } >
                {writer.writer ? writer.writer.name : 'John Smith'}&nbsp;
            </Link>
          </span>
        )
      })
    }

    render() {
      let p = this.props;
      let prettyFilters = helpers.beautifyFilters(p.data);
      const { connectDragSource, connectDropTarget, isDragging } = this.props;
        return connectDragSource(
          connectDropTarget(<div
            onTouchMove={this.props.onTouchMove.bind(null, p.data)}
            onMouseOver={this.props.onMouseOver.bind(null, p.data)}
            onMouseLeave={this.props.onMouseLeave.bind(null, this)}
            key={`${p.data.title}${p.idx}` }
            className={css(
              styles.rowWrapper,
              p.context === 'playlist' && styles.draggable,
              p.data._id === p.hoveredSong._id && styles.active
            )}
            >
            <div className={ css(styles.playButtonContainer)} onClick={this.props.toggleAudio.bind(null, p.data)}>
              <div className={ css(styles.playButton)}>
                {
                  this.props.paused
                  ?
                    <div className={css(styles.playIcon)}> <FontAwesomeIcon icon="play"/> </div>
                  :
                  this.props.song._id === p.data._id
                  ? <div className={css(styles.playIcon)}> <FontAwesomeIcon icon="pause"/> </div>
                  : <div className={css(styles.playIcon)}>  <FontAwesomeIcon icon="play"/> </div>
                }
              </div>
            </div>
            {
              p.hoveredSong && (p.data._id === p.hoveredSong._id)
              ?
              <div className={css(styles.innerSongRow)}>
                <div className={ css(styles.td, styles.songTitle) }> { p.data.title } </div>
                <div className={ css(styles.td) }> { this.createClickableWriters(p.data) } </div>
                <SongActions hoveredSong={p.hoveredSong} {...this.props} />
              </div>
              :
              <div className={css(styles.innerSongRow)}>
                <div className={ css(styles.td, styles.songTitle) }> { p.data.title } </div>
                <div className={ css(styles.td) }> { this.createClickableWriters(p.data) } </div>
                <div className={ css(styles.td) }> { prettyFilters } </div>
                <div className={ css(styles.td) }> { p.data.tempo } BPM </div>
                <div className={ css(styles.td) }> { p.data.duration } </div>
                { p.collaborator ? <div className={ css(styles.td) }> { p.collaborator } </div> : null }

              </div>
            }
          </div>
      ));
    }
}
Song = DragSource('SONG', songSource, collect)(Song);
Song = DropTarget('SONG', songTarget, collectTargets)(Song);

export default Song
