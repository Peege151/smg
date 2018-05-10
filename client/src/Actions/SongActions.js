function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
const APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"

const SongActions = {
  filterSongs: (include, exclude, tempoRange) => {
    return fetch(APIROUTE + '/songs/?include=' +
    include +
    '&exclude=' + exclude +
    tempoRange, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data.json() })
  },

  getSong: (id) => {
    return fetch(APIROUTE + '/songs/' + id , {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => data.json() )
  },

  getAllSongs: () => {
    return fetch(APIROUTE + '/songs/', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data =>  data.json() )
  }
}
export default SongActions;
