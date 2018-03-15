import { StyleSheet } from 'aphrodite';
import APP_CONSTANTS from '../../constants.js';


const styles = StyleSheet.create({
  activeIcon: {
    background: 'white',
  },
  iconWrap: {
    fontSize: 36,
    display: 'flex',
    height: '100%',
    border: '1px solid white',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    width: 80,
    margin: '0px 6px',
    cursor: 'pointer',
    zIndex: 2,
  },
  tooltip: {
    position: 'absolute',
    whiteSpace: 'nowrap'
  },
  innerSongActionHoverWrapper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    height: '100%',
    top: 0,
    right: 0,
    width: '50%',
  },
});

export default styles
