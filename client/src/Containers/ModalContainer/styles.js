

import { StyleSheet } from 'aphrodite';
import constants from './../../constants.js'
const styles = StyleSheet.create({
  modal: {
    width: window.innerWidth <= 768 ? '100%' : '50%',
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: window.innerWidth <= 768 ? '0' : '25%',
    minHeight: 370,
    transform: 'translateY(-50%)',
    background: '#f1efee',
    zIndex: 999,
    borderRadius: 10,
    paddingBottom: 20,
  },
  modalForm: {
    width: '80%',
    margin: '0 auto',
  },
  selectPlaylists: {
    padding: '20px',
    fontSize: '14px',
    textAlign: 'center',
    borderBottom: '1px solid white',
    marginTop: '0px',
    overflow: 'scroll',
  },

  playlistOption: {
    height: 40,
    textAlign: 'left',
    border: '1px solid #bab7b5',
    width: '80%',
    position: 'relative',
    margin: '10px auto',
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  numSongs: {
    position: 'absolute',
    right: 20,
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '18px'
  },
  modalTitle: {
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    background: 'white',
    margin: '0px',
    position: 'relative',
  },
  modalInput: {
    background: 'white',
    width: '100%',
    height: 40,
    margin: '0 auto',
    border: '2px solid #f1efee',
  },
  modalTextarea: {
    background: 'white',
    width: '100%',
    margin: '0 auto',
    height: 100,
    border: '2px solid #f1efee'
  },
  submitModal: {
    background: '#5f4c7c',
    color: 'white',
    width: '100%',
    height: 40,
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    border: '2px solid #f1efee',
  },
  disabled: {
    background: '#726b7d',
    border: '2px solid #f1efee',
  },
  closeModal: {
    position: 'relative',
    float: 'right',
    // App.css
    fontSize: 24,
    cursor: 'pointer',
  },
  error: {
    color: constants.ERROR_COLOR
  },
  absoluteOverlay: {
    background: 'rgba(0,0,0,.5)',
    position: 'fixed',
    top: window.scrollY,
    width: '100%',
    height: '100%',
    zIndex: 99,
  },
});

export default styles;
