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
  setToolTipLeft: {
    display: 'flex-inline'
  },
  setCenter: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '70px',
    alignContent: 'center',
    justifyContent: 'center',
    //padding: '20px'
  },
  innerSongActionHoverWrapper: {
    width: '50%',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
});

export default styles
