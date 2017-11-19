import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    linksContainer: {
      display: 'inline-block',
      width: window.innerWidth > 767 ? '25%' : '100%'
    },
    wrapper: {
      width: '100%'
    },
    title: {
      marginTop: 0
    },
    link: {
      color: 'white'
    }
});
export default styles;
