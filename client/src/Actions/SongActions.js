function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
let SongActions = {
  filterSongs: (query) => {
    return fetch('http://localhost:8081/api/songs/?include=' + query, {
    //fetch('https://smg-api.herokuapp.com/api/songs/?include=' + query, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data.json() })
  },
  getAllSongs: () => {
    return fetch('http://localhost:8081/api/songs/', {
    //fetch('https://smg-api.herokuapp.com/api/songs/', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data.json() })
  }
}
export default SongActions
