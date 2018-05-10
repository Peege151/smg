import { StyleSheet } from 'aphrodite';
import APP_CONSTANTS from '../../constants.js';
let numHeadersOtherThanPlay = 5;
let playWidth = 50
const styles = StyleSheet.create({
  headerWrapper: {
    background: '',
    width: '90%',
    margin: '0 auto',
    padding: 10,
    borderBottom: '2px solid #ddd',
    display: window.innerWidth < 768 ? 'none' : 'block',
    position: 'relative',
    paddingLeft: 70,
  },
  headerLength: {
    width: `calc(${ 100 / numHeadersOtherThanPlay }% -  ${Math.ceil((playWidth) / numHeadersOtherThanPlay)}px)`,
  },
  header: {
    textAlign: 'left',
    color: '#999',
    display: 'inline-block',
    textAlign: 'left',
    fontSize: 14,
    padding: 10,
  },
  spinnerWrapper: {
    textAlign: 'center',
    padding: 40,
  },
  serverError: {
    color: APP_CONSTANTS.ERROR_COLOR
  },
});

export default styles
