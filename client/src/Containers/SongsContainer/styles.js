import { StyleSheet } from 'aphrodite';
import APP_CONSTANTS from '../../constants.js';
let numHeadersOtherThanPlay = 4;
let playWidth = 50
const styles = StyleSheet.create({
  rowWrapper: {
    width: '90%',
    margin: '0 auto',
    padding: 10,
    fontSize: 18,
    borderBottom: '2px solid #ddd',
    position: 'relative',
    height: window.innerWidth < 768 ? 'auto' : 90,
  },
  headerWrapper: {
    background: '',
    width: 'calc(90% - ' + 50 + 'px)',
    margin: '0 auto',
    padding: 10,
    borderBottom: '2px solid #ddd',
    display: window.innerWidth < 768 ? 'none' : 'block',
    position: 'relative',
    left: '-15px'
  },
  header: {
    color: '#999',
    display: 'inline-block',
    textAlign: 'left',
    fontSize: 14,
    padding: 10,
    width: 'calc(20% - ' +  Math.ceil((playWidth) / numHeadersOtherThanPlay) + 'px)',
  },
  td: {
    display: window.innerWidth < 768 ? 'block' : 'inline-block',
    width: window.innerWidth < 768 ? '100%' : 'calc(20% - ' +  Math.ceil((playWidth) / numHeadersOtherThanPlay) + 'px)',
    padding: window.innerWidth < 768 ? 3 : 10,
  },
  innerSongRow: {
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    displayContent: 'center',
    alignItems: 'center',
    width: 'calc(100% - ' + playWidth + 'px)',
    left: playWidth + 10, //padding,
    position: 'relative',
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
    position: 'absolute',
    top: "calc(50% - " + playWidth / 2 + "px)",
    bottom: 0,
  },
});

export default styles
