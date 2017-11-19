import { StyleSheet } from 'aphrodite';
import moss from './../../assets/moss.jpg';


const styles = StyleSheet.create({
  wrapper: {
    background: "url("+moss+")",
    height: 400,
    backgroundSize: 'contain',
  },
  paragraphWrapper: {
    padding: 20
  },
  header: {
    margin: 0,
    color: 'white',
    position: 'relative',
    top: '54%',
    textAlign: 'center',
    transform: 'translateY(-50%)',
  }
});
export default styles;
