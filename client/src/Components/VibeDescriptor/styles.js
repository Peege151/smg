import { StyleSheet } from 'aphrodite/no-important';
// ASSUMPTIONS MADE HERE -- 3 OPTIONS
const BENCH_HEIGHT = 252
const DESCRIPTOR_CONTAINER_MULTIPLIER = 1.5
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
  descriptorMenuWrapperOuter: {
    width: '25%',
    position: 'relative',
    border: '1px solid #EEE',
    bottom: ( BENCH_HEIGHT * DESCRIPTOR_CONTAINER_MULTIPLIER - BENCH_HEIGHT ) /2,
    height: BENCH_HEIGHT * DESCRIPTOR_CONTAINER_MULTIPLIER,
    maxHeight: BENCH_HEIGHT * DESCRIPTOR_CONTAINER_MULTIPLIER,
    fontSize: 18,
    verticalAlign: 'middle',
    whiteSpace: 'no-wrap',
    float: 'left',
    overflow: 'scroll'
  },
  descriptorMenuWrapperInner: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    fontSize: 18,
  },
  descriptorItems: {
    height: BENCH_HEIGHT * DESCRIPTOR_CONTAINER_MULTIPLIER / 9, //This kinda sucks
    background: 'white',
    display: 'table',
    width: '100%'
  },
  descriptorInner: {
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle'
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
  1: {
    background: '#dcdbdb',
  },
  2: {
    background: '#e5e5e4'
  }
});
export default styles;
