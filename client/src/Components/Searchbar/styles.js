import { StyleSheet } from 'aphrodite';



const styles = StyleSheet.create({
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginBottom: 0,
  },
  listItem: {
    ':last-child': {
      ':after': {
        content: '""',
      }
    },
    ':after': {
      content: '" | "',
    },
    display: 'inline'
  },
  header: {
    display: 'table'
  },
  routeItem: {
    display: 'inline',
  },
  wrapper: {
    width: '100%',
  },
  active: {
    color: '#4c7c5f',
  },
  searchbar: {
    width: '100%',
    height: 30,
    border: '1px solid #d7d7d7',
    marginBottom: 10,
  }
});
export default styles;
