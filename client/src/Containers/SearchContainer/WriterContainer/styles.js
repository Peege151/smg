
import { StyleSheet } from 'aphrodite';

const BUTTON_HEIGHT = 50


const styles = StyleSheet.create({
    wrapper: {
      position: 'relative',
      fontFamily: "Akkurat-Light",
    },
    banner: {
      width: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    name: {
      textAlign: 'center',
      margin: 0,
      fontSize: 18,
      padding: '20px 0'
    },
    inner: {
      margin: '50px 0px'
    },
    bioWrap: {
      display: 'flex',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      margin: '0% 15%',
      background: '#4a4a4a'
    },
    image: {
      width: window.innerWidth <= 768 ? '100%' : '35%',
      display: 'inline',
      alignSelf: 'center'
    },
    textWrap: {
      width: window.innerWidth <= 768 ? '100%' : '65%',
      color: 'white',
      fontFamily: 'Akkurat-Light',
      fontSize: 16,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      whiteSpace: 'pre-line',
    },
});
export default styles ;
