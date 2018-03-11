import { StyleSheet } from 'aphrodite/no-important';
// ASSUMPTIONS MADE HERE -- 3 OPTIONS
const BENCH_HEIGHT = 252

const styles = StyleSheet.create({
  filtersWrapperOuter: {
    width:'100%',
    background: '#EEE',
    display: 'table',
    fontFamily: 'Akkurat-Light',
  },
  filtersWrapperInner: {
    height: '380px',
    margin: '0 auto',
    width: '90%',
    display: 'table',
    whiteSpace: 'no-wrap',
    boxSizing: 'border-box',
  },
  absoluteText: {
    position: 'absolute',
    top: 3,
    left: 5,
  },
  excluded: {
    textDecoration: 'line-through',
  },
  active: {
    background: '#5f4c7c',
    color: 'white'
  },
  vibeContexts: {
    height: (BENCH_HEIGHT / 3),
    color: 'black',
    background: 'white',
    display: 'table',
    width: '100%',
    boxShadow: 'inset 0 -2px 0 #EEE',
    ':last-of-type': {
      boxShadow: 'inset 0 -0px 0 #EEE',
    },
  },
  vibeContextWrapper: {
    height: BENCH_HEIGHT,
  },
  filterItem: {
    color: 'black',
  },
  vibe: {
    position: 'relative',
    background: 'white',
    outline:'1px solid #EEE',
    height: BENCH_HEIGHT,
    width: window.innerWidth < 768 ? '100%' : '25%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'table',
    whiteSpace: 'no-wrap',
    float: 'left'
  },
  relatedArtists: {
    background: 'white',
    border: '1px solid #EEE',
    height: BENCH_HEIGHT / 3,
    width: window.innerWidth < 768 ? '50%' : '20%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'table',
    whiteSpace: 'no-wrap',
    float: 'left'
  },
  vocals: {
    background: 'white',
    border: '1px solid #EEE',
    height: BENCH_HEIGHT ,
    width: window.innerWidth < 768 ? '50%' : '20%',
    fontSize: 17,
    verticalAlign: 'middle',
    display: 'table',
    float: 'left'
  },
  tempo: {
    background: 'white',
    border: '1px solid #EEE',
    height: BENCH_HEIGHT,
    width: '100%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    float: 'left'
  },
  genres: {
    background: 'white',
    border: '1px solid #EEE',
    height: BENCH_HEIGHT / 4,
    width: window.innerWidth < 768 ? '50%' : '20%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'table',
    float: 'left'
  },
  genresMobile: {
    width: '50%',
  },
  instruments: {
    background: 'white',
    border: '1px solid #EEE',
    height: BENCH_HEIGHT / 2,
    width: window.innerWidth < 768 ? '50%' : '20%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'table',
    float: 'left'
  },

  inner: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  innerVibeContext: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    height: BENCH_HEIGHT / 3,
  },
  clearFilters: {
    fontSize: 16,
    textDecoration: 'underline',
    textAlign: 'right',
    display: 'table',
    width: '100%'
  }
});
export default styles;
