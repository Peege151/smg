import { StyleSheet } from 'aphrodite';
const playWidth = 50;

const styles = StyleSheet.create({
  playerWrapper: {
    width: '100%',
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
