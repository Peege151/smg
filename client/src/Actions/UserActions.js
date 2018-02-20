function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let UserActions = {
  getSession: () => {
    console.log('Getting Session...')
    return fetch('http://localhost:8081/api/cookie', {
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
    return fetch('http://localhost:8081/api/users/login', {
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
    return fetch('http://localhost:8081/api/users/', {
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
  requestForgottenPassword: (body) => {
    return fetch('http://localhost:8081/api/users/forgot', {
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
