function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

const APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"
const WriterActions = {
  getWriter:(id) => {
    return fetch(APIROUTE + '/writers/' + id, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => data.json())
  }
}
export default WriterActions
