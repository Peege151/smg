function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
const APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api";

const downloadActions = {
  createDownload: (body) => {
    return fetch(APIROUTE + '/downloads/', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data =>  data.json())
    .catch(err => { throw new Error( err.message ) })
  }
}
export default downloadActions;
