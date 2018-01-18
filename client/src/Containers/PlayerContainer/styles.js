import { StyleSheet } from 'aphrodite';
const playWidth = 120; //includes padding
const playerBgColor = '#dcdbdb';


const styles = StyleSheet.create({
  playerWrapper: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 70,
    background: '#eeeeee',
    display: 'flex',
    alignItems: 'center',
    zIndex: 0,
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
    borderLeft: '3px solid #eeeeee',
    width: 'calc(100% - ' + playWidth + 'px)',
    position: 'absolute',
    backgroundSize: 'contain',
    height: 60,
    top: 5,
    zIndex: 1,
  },
  outerPlay: {
    display: 'inline-block',
    padding: 10,
  },
  scrubProgress: {
    background: 'white', //'#a494bc',
    height: 60,
    top: 5,
    borderRight: '10px '+ playerBgColor,
    zIndex:0,
  },
  playButtonWrapper: {
    width: playWidth,
    height: 60,
    display: 'inline-block',
    background: 'white',
    position: 'relative',
    width: 100,
    top: 0,
    bottom: 0,
  },
  song: {
    zIndex: 2,
    fontSize: 16,
    padding: '0px 20px',
    position: 'relative'
  },
  songTitle: {
    zIndex: 2,
    position: 'relative',
    bottom: 5,
    ':hover': {
      textDecoration: 'underline',
    }
  },
  by: {
    fontSize: 12,
    fontStyle: 'italic',
    position: 'relative',
    bottom: 5,
  },
  timeCounters: {
    pointerEvents: 'none',
    zIndex: 2,
    position: 'absolute',
    fontSize: 12,
    left: playWidth,
    bottom: 15,
  },
  songWriters: {
    zIndex: 1,
    position: 'relative',
    bottom: 5,
    ':hover': {
      textDecoration: 'underline',
    }
  }
});

export default styles
