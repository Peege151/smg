function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let UserActions = {
  getSession: () => {
    console.log('Getting Session...')
    return fetch('https://smg-api.herokuapp.com/api/cookie', {
      method: 'GET',
      credentials: 'include',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log('Got Session?? ', data)
      return data;
    })
    .catch(err => {
      console.log('Error Session', err)
      throw err
    })
  },
  login: (body) => {
    return fetch('https://smg-api.herokuapp.com/api/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json();
    })
    .catch(err => {
      throw new Error( err.message )
    })
  },
  signup: (body) => {
    return fetch('https://smg-api.herokuapp.com/api/users/', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({email: body.email, password: body.password}),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then( data => {
      return data.json();
    })
    .catch(err => {
      throw err
    })
  },
  logout(){
    return fetch('https://smg-api.herokuapp.com/api/users/logout', {
      credentials: 'include',
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data;
    })
  },
  requestForgottenPassword: (body) => {
    return fetch('https://smg-api.herokuapp.com/api/users/forgot', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json()
    })
  }
}
export default UserActions
