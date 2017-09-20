import { StyleSheet } from 'aphrodite';



const styles = StyleSheet.create({
    wrapper: {
      fontFamily: "Akkurat-Light",
      fontSize: 24,
      fontWeight: 400,
      width: '20%',
      display: 'inline-block',
      paddingRight: 30,
      boxSizing: 'border-box',
    },
    item: {
      margin: 0,
      padding: '5px'
    },
    active: {
      background: '#4c7c5f',
      color: 'white'
    },

    link: {
      color: 'inherit',
      textDecoration: 'none'
    }
});
export { styles };
