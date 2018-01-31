import { StyleSheet } from 'aphrodite';



const styles = StyleSheet.create({
    mainContainerWrapper: {
      width: '100%',
      fontFamily: "Akkurat-Light",
      fontSize: 24,
      fontWeight: 400,
      display: 'inline-block',
      verticalAlign: 'top',
      boxSizing: 'border-box',
      height: '100%',
    },
    routerContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto',
    },
    footer: {
      flexShrink: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      background: '#5f4c7c',
      fontSize: 16,
      color: 'white',
      fontFamily:' Akkurat-Light',
    },
});

export default styles;
