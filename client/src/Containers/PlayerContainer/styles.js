import { StyleSheet } from 'aphrodite';
const playWidth = 120; //includes padding
const playerBgColor = '#dcdbdb';


const styles = StyleSheet.create({
  playerWrapper: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: playerBgColor,
    height: 70,
    display: 'flex',
    alignItems: 'center',
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
  scrubInnerWrapper: {
    position: 'relative',
    width: '100%',
  },
  scrubInnerWrapper: {
    width: 'calc(100% - ' + playWidth + 'px)',
    position: 'absolute',
    zIndex: -1,
    height: 60,
    top: 5
  },
  outerPlay: {
    display: 'inline-block',
    padding: 10,
  },
  scrubProgress: {
    background: '#a494bc',
    height: 60,
    top: 5,
    borderRight: '10px '+ playerBgColor,
  },
  playButtonWrapper: {
    cursor: 'pointer',
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
    padding: '0px 20px'
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
