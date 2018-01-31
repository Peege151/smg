import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      textAlign: 'center',
      background: '#eee',
      position: 'relative',
    },
    content: {
      textAlign: 'center'
    },
    overlay: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      background: 'rgba(0,0,0,0)',
    },
    header: {
      textAlign: 'center',
      top: '50%',
      width: '100%',
      textAlign: 'center',
    },
    outer: {
      textAlign: 'center',
    },
    title: {
      marginTop: 0
    },
    showEmail: {
      color: '#0080cd',
    },
    outer: {
      position: 'relative',
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      display: 'block',
    }
});
export default styles;
