import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      background: '#efefed',
      position: 'relative',
    },
    overlay: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      background: 'rgba(0,0,0,0)',
    },
    outer: {
      textAlign: 'center',
    },
    playlistTitle: {
      marginTop: 0,
      textAlign: 'center',

    },
    collabie: {
      background: '#f8f8f8',
      textAlign: 'center',
      fontSize: '16px',
    },
    loadingContainer: {
      textAlign: 'center',
      paddingTop: '50px',
      background: 'white',
    },
    by: {

    },
    playlistSCWrapper: {
      background: 'white',
    },
    actionsWrapper: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      background: '#f8f8f8',
      marginTop: 20,
      padding: 20,
    },
    collaboratingInfo: {
      fontSize: 16,
      background: '#f8f8f8 !important',
      textAlign: 'center',
      padding: 16,
      margin: 0,
    },
    right: {
      position: 'absolute',
      right: 0,
      top: 10,
      display: 'flex',
    },
    center: {
      display: 'inline',
      top: 0,
      margin: 'auto'
    },
    action: {
      background: '#efefed',
      borderRadius: 5,
      cursor: 'pointer',
      border: '1px solid #d7d7d7',
      padding: 10,
      width: 50,
      display: 'inline',
      textAlign: 'center',
    },
    infoLine: {
      color: '#666',
      fontStyle: 'italic',
      fontSize: '16px',
      textAlign: 'center',
    },
    tooltip: {
      position: 'absolute',
    },
    data: {
      fontStyle: 'normal',
      fontSize: '18px',
      color: '#3a3532',
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
    image: {
      width: '100%',
      objectFit: 'cover',
      display: 'block',
    }
});
export default styles;
