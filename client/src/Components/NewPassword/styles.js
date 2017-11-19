import { StyleSheet } from 'aphrodite';
import loginbg from './../../assets/login-bg.jpg';
import APP_CONSTANTS from '../../constants.js';

const styles = StyleSheet.create({
  outerWrapper: {
    width: '100%',
    height: '100vh',
    background: 'url(' + loginbg +')',
    backgroundSize: 'cover',
    '@media (min-width: 1220px)': {
      backgroundPositionY: '-50px',
      backgroundSize: 'cover',
    },
    '@media (min-width: 1380px)': {
      backgroundPositionY: '-100px',
      backgroundSize: 'cover',
    }
  },
  overlay: {
    background: 'rgba(0,0,0,.7)',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  resetPasswordWrapper: {
    width: '50%',
    background: '#222',
    margin: '0 auto',
    position: 'relative',
    top: '50%',
    zIndex: 3,
    transform: 'translateY(-50%)',
    borderRadius: 4,
    textAlign: 'center',
    paddingBottom: 40
  },
  resetPasswordHeader: {
    margin: '0 auto',
    width: 80,
    height: 80,
    backgroundImage: "url(" + APP_CONSTANTS.ICON_PATH + ")",
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: '5px solid ' + APP_CONSTANTS.ACCENT_COLOR,
    borderRadius: 80,
    position: 'absolute',
    left: '50%',
    zIndex: 2,
    transform: 'translate(-50%, -50%)'
  },
  formContainer: {
    paddingTop: 40,
    color: 'white',
    height: '100%'
  },
  input: {
    margin: '10px auto',
    height: 26,
    width: '80%',
    display: 'block',
    border: 'none',
  },
  inputWrappers: {
    position: 'relative',
    display: 'flex',
    alignItems: 'space-around',
    displayContent: 'center',
    flexDirection: 'column',
  },
  resetPasswordButton: {
    width: '80%',
    display: 'block',
    margin: '10px auto',
    background: APP_CONSTANTS.ACCENT_COLOR,
    color: 'white',
    border: 'none',
    height: 26,
  },
  serverError: {
    color: APP_CONSTANTS.ERROR_COLOR
  }
});

export default styles
