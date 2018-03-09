function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
let WriterActions = {
  getWriter:(id) => {
    //return fetch('https://smg-api.herokuapp.com/api/writers/' + id, {

    return fetch('http://localhost:8081/api/writers/' + id, {
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
