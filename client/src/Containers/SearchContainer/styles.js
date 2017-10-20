import { StyleSheet } from 'aphrodite';

const BUTTON_HEIGHT = 50


const styles = StyleSheet.create({
    wrapper: {
      position: 'relative',
      fontFamily: "Akkurat-Light",
    },
    filterContainerWrapper: {
      background: '#EEE',
    },
    banner: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block',
    },
    buttonContainer: {
      width:'100%',
      height: BUTTON_HEIGHT,
    },
    button: {
      ':focus': {
        outline:0
      },
      fontFamily: 'Akkurat-Light',
      display: 'inline-block',
      width:'50%',
      border: 'none',
      color: 'black',
      fontSize: '24px',
      height: BUTTON_HEIGHT,
      background: 'white',
    },
    active: {
      background: '#4c7c5f',
      color: 'white'
    }
});
export default styles ;
