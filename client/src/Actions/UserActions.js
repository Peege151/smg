function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
const APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"

const UserActions = {
  editUser: (body ) => {
    return fetch(APIROUTE + '/users/' + body._id, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => data.json())
    .catch(err => { throw new Error( err.message ) })
  },

  getSession: () => {
    return fetch(APIROUTE + '/cookie', {
      method: 'GET',
      credentials: 'include',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data =>  data.json())
    .catch(err => { throw err })
  },

  login: (body) => {
    return fetch(APIROUTE + '/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => data.json())
    .catch(err => { throw new Error( err.message ) })
  },

  signup: (body) => {
    return fetch(APIROUTE + '/users/', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({email: body.email, password: body.password, firstName: body.firstName, lastName: body.lastName}),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then( data =>  data.json())
    .catch(err => { throw err })
  },

  logout(){
    return fetch(APIROUTE + '/users/logout', {
      credentials: 'include',
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data })
  },

  requestForgottenPassword: (body) => {
    return fetch(APIROUTE + '/users/forgot', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => data.json())
  }
}
export default UserActions
