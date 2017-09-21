import { StyleSheet } from 'aphrodite/no-important';
// ASSUMPTIONS MADE HERE -- 3 OPTIONS
const BENCH_HEIGHT = 252

const styles = StyleSheet.create({
  absoluteText: {
    position: 'absolute',
    top: 3,
    left: 5,
  },
  active: {
    background: '#5f4c7c',
    color: 'white'
  },
  vibe: {
    position: 'relative',
    background: 'white',
    outline:'1px solid #EEE',
    height: BENCH_HEIGHT,
    width: '25%',
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'table',
    whiteSpace: 'no-wrap',
    float: 'left'
  },
  inner: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});
export default styles;
