import { StyleSheet } from 'aphrodite';



const styles = StyleSheet.create({
    wrapper: {
      fontFamily: "Akkurat-Light",
      display: 'inline-block',
      boxSizing: 'border-box',
      position: 'absolute',
      right: '5%',
      paddingRight: 0,
    },
    innerWrapper: {
      position: 'relative',
      zIndex: 3,
    },
    list: {
      width: '100%',
      display: 'inline',
      zIndex: 2,
      color: 'white',
    },
    item: {
      margin: 0,
      fontSize: 18,
      color: 'white',
    },
    invert: {
      color: 'black',
    },
    active: {
      borderBottom: '1px solid #4c7c5f',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
      display: 'inline-block',
    }
});
export { styles };
