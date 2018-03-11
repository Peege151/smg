import { CATEGORIES } from '../FilterHeaders/categories.js';

let helpers = {
  beautifyFilters: (song) => {
    let categories = CATEGORIES.filter(cat => cat.selector === 'genres')[0].variants.map(vari => vari.value);
    let filters =  song.filters.map( filter => {
      if (categories.indexOf(filter) > -1 ){
        if (filter === 'hiphop-rap') filter = 'hip|hop';
        let letter = filter.split('')[0].toUpperCase();
        return filter.split('').map( (lett, idx) => {
          if (filter.split('')[idx - 1] === '_') return lett.toUpperCase();
          if (filter.split('')[idx - 1] === '-') return lett.toUpperCase();
          if (filter.split('')[idx - 1] === '|') return lett.toUpperCase();
          if (idx === 0) return letter;
          if (lett === '_') return " ";
          if (lett === '-') return " ";
          if (lett === '|') return '-';
          return lett;
        }).join('')
      }
      // this next line removes undefined values from the array, that arrived
      // there as a result of non-genre filter variants initially pushing undefined to array
    }).filter(i => i).join(' ')
    if (filters.length > 20){
      filters = filters.replace(/^(.{19}[^\s]*).*/, "$1...")
    } else {
      filters = filters.replace(/^(.{11}[^\s]*).*/, "$1")
    }
    return filters;
  }
}
export default helpers;
