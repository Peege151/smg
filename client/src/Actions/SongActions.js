function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
//TODO use process.env
let SongActions = {
  filterSongs: (include, exclude, tempoRange) => {
    return fetch('https://smg-api.herokuapp.com/api/songs/?include=' +
    //return fetch('http://localhost:8081/api/songs/?include=' +
    include +
    '&exclude=' + exclude +
    tempoRange, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data.json() })
  },
  getAllSongs: () => {
    //return fetch('http://localhost:8081/api/songs/', {
    return fetch('https://smg-api.herokuapp.com/api/songs/', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json()
    })
  }
}
export default SongActions;
