import { StyleSheet } from 'aphrodite';
import APP_CONSTANTS from '../../constants.js';


const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  activeIcon: {
    background: 'white',
  },
  iconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    height: '75%',
    border: '1px solid white',
    borderRadius: '4px',
    width: 80,
    margin: '0px 6px',
    cursor: 'pointer',
  },
});

export default styles
