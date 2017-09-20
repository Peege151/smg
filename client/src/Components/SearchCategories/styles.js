import { StyleSheet } from 'aphrodite';

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
    }
});
export default styles;
