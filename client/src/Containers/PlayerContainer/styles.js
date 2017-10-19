import { StyleSheet, css } from 'aphrodite';
import logo from '../../assets/loader.png';
import loginbg from './../../assets/login-bg.jpg';
import APP_CONSTANTS from '../../constants.js';
const playWidth = 50;
const playHeight = 50;

const styles = StyleSheet.create({
  playerWrapper: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    bottom: 0,
    background: '#dcdbdb',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
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
    zIndex: 2,
  },
  playButtonWrapper: {
    cursor: 'pointer',
    width: playWidth,
    height: playWidth,
    display: 'inline-block',
    background: 'white',
    position: 'relative',
    width: 100,
    top: 0,
    bottom: 0,
  },
  song: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    padding: '0px 10px'
  },
  by: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  writers: {
    fontSize: 18,
    padding: '0px 10px'
  }
});

export default styles
