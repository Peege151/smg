import { StyleSheet } from 'aphrodite';
import loginbg from './../../assets/login-bg.jpg';
const styles = StyleSheet.create({
    wrapper: {
      fontFamily: "Akkurat-Light",
      display: 'inline-block',
      boxSizing: 'border-box',
      position: 'absolute',
      background: 'url(' + loginbg +')',
      paddingRight: 0,
      height: '100vh',
      width: '100%',
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
    innerWrapper: {
      position: 'relative',
      zIndex: 3,
    },
    list: {
      width: '100%',
      display: 'inline',
      zIndex: 2,
      color: 'white',
    },
    formContainer: {
      padding: '40px 0px',
      color: 'white',
      display: 'table',
      width: 400,
      margin: '0 auto',
      background: 'rgba(0,0,0,.5)',
      top: '50%',
      position: 'relative',
      transform: 'translateY(-50%)',
      borderRadius: 4
    },
    linksContainer: {
      fontSize: 18,
      textAlign: 'right',
      paddingRight: 40
    },
    errors: {
      position: 'absolute',
      color: 'red',
      left: 40,
      top: 5
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
    loginButton: {
      width: '80%',
      display: 'block',
      margin: '10px auto',
      background: '#4c7c5f',
      color: 'white',
      border: 'none',
      height: 26,
    },
    forgot: {
      position: 'absolute',
      left: 40,
      cursor: 'pointer'
    },
    swap: {
      cursor: 'pointer'
    }
});
export default styles;
