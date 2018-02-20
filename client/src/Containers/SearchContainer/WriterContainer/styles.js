
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
      margin: '0% 15%',
      background: '#4a4a4a'
    },
    image: {
      width: '35%',
      display: 'inline',
      maxWidth: '50%',
      alignSelf: 'center'
    },
    textWrap: {
      width: '65%',
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
