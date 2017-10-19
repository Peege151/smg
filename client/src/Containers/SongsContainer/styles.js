import { StyleSheet, css } from 'aphrodite';
import logo from '../../assets/loader.png';
import loginbg from './../../assets/login-bg.jpg';
import APP_CONSTANTS from '../../constants.js';
let numHeadersOtherThanPlay = 4;
let playWidth = 50
const styles = StyleSheet.create({
  rowWrapper: {
    width: '90%',
    margin: '0 auto',
    padding: 10,
    fontSize: 18,
    display: 'flex',
    borderBottom: '2px solid #ddd',
    displayContent: 'center',
    alignItems: 'center'
  },
  headerWrapper: {
    background: '',
    width: '90%',
    margin: '0 auto',
    padding: 10,
    borderBottom: '2px solid #ddd'
  },
  header: {
    color: '#999',
    display: 'inline-block',
    textAlign: 'left',
    fontSize: 14,
    padding: 10,
    width: 'calc(20% - ' +  Math.ceil(playWidth / numHeadersOtherThanPlay) + 'px)',
  },
  td: {
    display: 'inline-block',
    width: 'calc(20% - ' +  Math.ceil(playWidth / numHeadersOtherThanPlay) + 'px)',
    padding: 10
  },
  songTitle: {
    textDecoration: 'underline',
  },
  serverError: {
    color: APP_CONSTANTS.ERROR_COLOR
  },
  play: {
    width: playWidth,
  },
  playIcon: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
  },
  playButtonContainer: {
    cursor: 'pointer',
    width: playWidth,
    height: playWidth,
    display: 'inline-block',
    background: '#dcdbdb',
    position: 'relative',
    top: 0,
    bottom: 0,
  },
});

export default styles
