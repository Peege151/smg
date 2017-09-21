import { StyleSheet } from 'aphrodite/no-important';
const BUTTON_SPACER = 40
const styles = StyleSheet.create({
    wrapper: {
      fontFamily: 'times',
      fontSize: 18,
      width: '90%',
      marginLeft: '5%',
    },
    headerWrapper: {
      width: '100%',
      margin: '0 auto',
      paddingTop: 20,
    },
    header: {
      textAlign: 'center',
      display: 'inline-block',
      width: '16.6666666667%'
    },
    active: {
      background: '#4c7c5f',
      color: 'white',
    },
    innerHeader: {
      border: '1px solid #EEE',
      padding: 10,
      background: 'white',
    },
    categoryTitle: {
      margin: 0,
      position: 'relative',
    },
    checkboxContainer: {
      display: 'block',
      marginTop: 5,
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 0,
      right:0,
    },
    buttonSpacer: {
      height: BUTTON_SPACER
    },
    buttons: {
      background: '#4c7c5f',
      color: 'white',
      border: 'none',
      padding: 5,
      fontSize: 18,
      width: 100,
      ':first-of-type': {
        marginRight: 10,
      }
    }
});
export default styles;
