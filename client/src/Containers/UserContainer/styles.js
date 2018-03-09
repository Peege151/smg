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
    background: '#f1efee',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  formsContainer: {
    display: 'flex',
    background: '#f1efee !important',
  },
  formContainer: {
    padding: 20,
    paddingBottom: 100,
    display: 'inline-block',
    width: '45%',
    margin: '0 auto'
  },
  input: {
    width: '70%',
    margin: '0 auto',
    borderRadius: 2,
    height: 40,
    outline: 'none',
    display: 'inline',
    border: '2px solid #f1efee',
  },
  button: {
    background: '#5f4c7c',
    color: 'white',
    width: '70%',
    position:'relative',
    right: 11,
    height: 40,
    margin: '20px auto',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    border: '2px solid #f1efee',
  },
  disabled: {
    background: '#726b7d',
    border: '2px solid #f1efee',
  },
  edit: {
    fontSize: 20,
    position: 'relative',
    top: '3px',
    left: '3px',
    cursor: 'pointer'
  },
  password: {
    position: 'relative',
    right: 11,
  },
  roundWrap: {
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
  },
});

export default styles
