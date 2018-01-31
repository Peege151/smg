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
    width: '75%',
    marginLeft: '5%',
    marginTop: '20px',
    height: 70,
    display: 'inline',
    border: '1px solid #d7d7d7',
    marginBottom: 10,
    fontSize: 24,
    padding: 10,
  },
  searchModel: {
    width: '15%',
    height: 70,
    display: 'inline',
    appearance: 'none',
    borderRadius: 0,
    border: '1px solid #d7d7d7',
    borderLeft: 'none',
    fontSize: 24,
    padding: 10,

  },

});
export default styles;
