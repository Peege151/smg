import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 'calc(100vh - 210px)',
      textAlign: 'center',
      background: '#eee',
    },
    title: {
      marginTop: 0
    },
    showEmail: {
      color: '#0080cd',
    },
    navColorAdjust: {
      background: 'black',
      height: 25,
      position: 'absolute',
      top: 0,
      width: '100%',
    }
});
export default styles;
