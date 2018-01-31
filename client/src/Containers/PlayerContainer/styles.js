import { StyleSheet } from 'aphrodite';
const playWidth = 100; //includes padding
const artworkWidth = 70;
const artworkMargin = 10
const playerBgColor = '#dcdbdb';

const scrubWidthMinusArtAndButton = playWidth + artworkWidth;


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
  waveformLoaded: {
    background: '#dcdcdc'
  },
  artworkWrap: {
    width: artworkWidth,
    height: artworkWidth,
    position: 'relative',
  },
  artwork: {
    width: '100%',
    paddingLeft: artworkMargin,
    position: 'relative',
    top: 5,
  },
  playIcon: {
    display: 'flex',
    position: 'absolute',
    top: 5,
    bottom: 0,
    height: 60,
    background: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    zIndex: 2,
  },
  scrubInnerWrapper: {
    borderLeft: '3px solid #eeeeee',
    width: 'calc(100% - ' + scrubWidthMinusArtAndButton + 'px)',
    position: 'absolute',
    backgroundSize: 'contain',
    height: 70,
    top: 0,
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
    height: 70,
    display: 'inline-block',
    background: '#eeeeee',
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
  waveformImage: {
    width: '100%',
    position: 'absolute',
    height: '70px'
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
    left: scrubWidthMinusArtAndButton + 20, // plus 20 padding
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
