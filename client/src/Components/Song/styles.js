import { StyleSheet } from 'aphrodite';

let numHeadersOtherThanPlay = 4.5;
let playWidth = 50

const styles = StyleSheet.create({

  rowWrapper: {
    width: '90%',
    margin: '0 auto',
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    position: 'relative',
    display: 'flex',
    height: window.innerWidth < 768 ? 'auto' : 90,
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
    //textDecoration: 'underline',
  },
  td: {
    display: window.innerWidth < 768 ? 'block' : 'inline-block',
    padding: window.innerWidth < 768 ? 3 : 10,
    width: window.innerWidth < 768 ? '100%' : undefined,
  },
  clickableWriter: {
    color: '#4b5d7c',
  },
  draggable: {
    cursor: 'grab',
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
  active: {
    background: '#e7e7e7',
  }
});

export default styles;
