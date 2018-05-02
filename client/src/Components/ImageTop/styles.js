import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    backgroundSize: 'contain',
    width: '100%',
    display: 'table',
    verticalAlign: 'middle',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    background: 'rgba(0,0,0,.1)',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    display: 'block',
  },
});
export default styles;
