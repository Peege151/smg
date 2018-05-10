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
  top: {
    background: '#EFEFED',
    textAlign: 'center',
    paddingTop: 20,
  },
  clickableWriter: {
    color: '#4b5d7c',
  },
  songTitle: {
    fontSize: 24
  },
  by: {
    textDecoration: 'italic',
    fontSize: 16,
  },
  writers: {
    fontSize: 18,
    paddingBottom: 20,
  },
  actions: {
    background: '#F8F8F8',
    position: 'relative',
  },
  songDataWrapperLeft: {
    padding: 20,
    fontSize: '80%',
    width: window.innerWidth > 768 ? '50%' : '100%',
    display: 'inline-block',
  },
  waveform:{
    padding: 20,
    position: 'relative',
    height: 110,
    zIndex: 0,
  },
  songDataWrapperRight: {
    padding: 20,
    fontSize: '80%',
    width: window.innerWidth > 768 ? '50%' : '100%',
    display: 'inline-block',
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    textDecoration: 'italic'
  },
  iconTop: {
    width: 100,
    height: 100,
    borderRadius: 100,
    border: '1px solid #baaca4',
    margin: '20px auto',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
    cursor: 'pointer',
  }
});
export default styles;
