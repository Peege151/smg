import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';
import bgimage  from './../../../assets/banner_speaker.jpg';
import SongsContainer from '../../SongsContainer/SongsContainer';
import writerImg from './../../../assets/jom.jpg';
import WriterActions from '../../../Actions/WriterActions.js'

class WriterContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }
    componentWillMount(){
      console.log('Getting Writer')
      //fetch('http://localhost:8081/api/songs/', {
      WriterActions.getWriter(this.props.match.params.writer)
      .then(json => { this.setState({ writer: json }) })
      .catch(err => { this.setState({clientError: err.message}) })
    }
    componentWillReceiveProps(newProps){
      if(this.props.match.params.writer !== newProps.match.params.writer){
        // new writer hit because user clicked a co-writer listed in the song-container
        WriterActions.getWriter(this.props.match.params.writer)
        .then(json => { this.setState({ writer: json }) })
        .catch(err => {
          this.setState({clientError: err.message})
        })
      }
    }

    render() {
        let loadingEl = this.state.writer ? null :  <div> Loading </div>
        let writerImgSrc = this.state.writer ? this.state.writer.picture : null;
        return (
          <div className={ css(styles.wrapper) }>
            <img src={bgimage} className={css(styles.banner)} alt="logo" />
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
            {this.state.writer ? <SongsContainer {...this.props } songs={this.state.writer.songs}/> : null}
          </div>
      );
    }
}

export default WriterContainer;
