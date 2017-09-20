import { StyleSheet } from 'aphrodite';
const BUTTON_SPACER = 20
const styles = StyleSheet.create({
    wrapper: {
      fontFamily: 'times',
      fontSize: 18,
    },
    tempo: {
      width: '100%',
      padding: 10,
      background: '#f0f0f0',
      display: 'block',
    },
    sound: {
      width: '100%',
      padding: 10,
      background: '#f0f0f0',
      display: 'inline-block',
    },
    vocal: {
      width: '100%',
      padding: 10,
      background: '#f0f0f0',
      display: 'inline-block',
      marginBottom: BUTTON_SPACER
    },
    similarArtists: {
      width: '100%',
      padding: 10,
      background: '#f0f0f0',
      display: 'inline-block',
    },
    arrows: {
      fontSize: '18px',
      position: 'absolute',
      right: '10px',
    },
    inlineCheckbox: {
      display: 'inline-block',
      width: '33%',
      '@media (max-width: 930px)': {
        width: '50%',
      },
      '@media (max-width: 630px)': {
        width: '100%',
      }
    },
    categoryTitle: {
      margin: 0,
      position: 'relative',
    },
    carrot: {
      position: 'absolute',
      right: 10
    },
    checkboxContainer: {
      display: 'block',
      marginTop: 5,
    },
    checkbox: {
      transform: 'scale(2)'
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 0,
      right:0,
    },
    buttonSpacer: {
      height: BUTTON_SPACER
    },
    buttons: {
      background: '#4c7c5f',
      color: 'white',
      border: 'none',
      padding: 5,
      fontSize: 18,
      width: 100,
      ':first-of-type': {
        marginRight: 10,
      }
    }
});
export default styles;
