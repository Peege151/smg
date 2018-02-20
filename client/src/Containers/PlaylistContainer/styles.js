import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      textAlign: 'center',
      background: '#eee',
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
      marginTop: 0
    },
    by: {

    },
    infoLine: {
      color: '#666',
      fontStyle: 'italic',
      fontSize: '16px',

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
