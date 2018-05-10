function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
let APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"


let shareActions = {
  createNewShare: (body) => {
    return fetch(APIROUTE + '/shares/', {
    //return fetch('https://smg-api.herokuapp.com/api/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      console.log('Back From Share', data);
      return data.json();
    })
    .catch(err => {
      throw new Error( err.message )
    })
  }
}
export default shareActions;
