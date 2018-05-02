import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

import bgimage  from './../../../assets/banner_speaker.jpg';
import ImageTop from './../../../Components/ImageTop/ImageTop';
import SongsContainer from '../../SongsContainer/SongsContainer';
import WriterActions from '../../../Actions/WriterActions.js'

class WriterContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }
    componentWillMount(){
      if(this.props.context === 'individual'){
        console.log('Logg', this.props.individualSong.writers[0].writer._id)
        WriterActions.getWriter(this.props.individualSong.writers[0].writer._id)
        .then(json => { this.setState({ writer: json }, () => { console.log('Indie Writer', this.state.writer.songs)}) })
        .catch(err => { this.setState({clientError: err.message}) })
      } else {
        console.log('Getting Writer')
        WriterActions.getWriter(this.props.match.params.writer)
        .then(json => { this.setState({ writer: json }, () => { console.log('WRITER', json)}) })
        .catch(err => { this.setState({clientError: err.message}) })
      }
    }
    componentWillReceiveProps(newProps){
      console.log('NewProps', newProps)
      let oldWriter, newWriter
      if(this.props.match){
        oldWriter = this.props.match.params.writer, newWriter = newProps.match.params.writer
      }
      if(oldWriter && oldWriter !== newWriter){
        // new writer hit because user clicked a co-writer listed in the song-container
        WriterActions.getWriter(newProps.match.params.writer)
        .then(json => { this.setState({ writer: json }) })
        .catch(err => {
          this.setState({clientError: err.message})
        })
      } else if(!oldWriter & !newWriter){
        //component loaded as child of song
        console.log('Child of Song', this.props)
      }
    }

    render() {
        let loadingEl = this.state.writer ? null :  <div> Loading </div>
        let writerImgSrc = this.state.writer ? this.state.writer.picture : null;
        return (
          <div className={ css(styles.wrapper) }>
            { this.props.context === 'individual' ? null : <ImageTop image={bgimage} /> }
            <div className={css(styles.inner)}>
              <h5 className={css(styles.name)}> { loadingEl || this.state.writer.name } </h5>
              <div className={css(styles.bioWrap)}>
                <img className={css(styles.image)} src={writerImgSrc} />
                <div className={css(styles.textWrap)}>
                  {this.state.writer ? this.state.writer.description : 'loading'}
                </div>
              </div>
            </div>
            <h5 className={css(styles.name)}> { loadingEl || `More Songs By ${this.state.writer.name}` } </h5>
            { this.state.writer ? <SongsContainer {...this.props } songs={this.state.writer.songs} /> : null}
          </div>
      );
    }
}

export default WriterContainer;
