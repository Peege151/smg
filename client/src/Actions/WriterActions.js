function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"
let WriterActions = {
  getWriter:(id) => {
    return fetch(APIROUTE + '/writers/' + id, {

    //return fetch('http://localhost:8081/api/writers/' + id, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json();
    })
  }
}
export default WriterActions
