function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
const APIROUTE = process.env.NODE_ENV === 'development' ? "http://localhost:8081/api" : "https://smg-api.herokuapp.com/api"

const PlaylistActions = {
  getUserPlaylists: () => {
    return fetch(APIROUTE + '/playlists/user/', {
      method: 'GET',
      credentials: 'include',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data =>  data.json() )
    .catch(err => { console.log('Err', err )})
  },

  createNewPlaylist: (body, songToInitiatePlaylist) => {
    let opts = { method: 'POST', credentials: 'include', headers: { "Content-Type": "application/json" }};
    opts.body = body;
    opts.body.songs = songToInitiatePlaylist || [];
    opts.body = JSON.stringify(body);
    return fetch(APIROUTE + '/playlists/', opts)
    .then(handleErrors)
    .then(data => data.json())
    .catch(err => { console.log('Err', err)})
  },

  editPlaylist: (playlist) => {
    playlist.songs = [...new Set(playlist.songs)];
    let opts = {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(playlist),
        headers: { "Content-Type": "application/json" }
    };
    return fetch(APIROUTE + '/playlists/' + playlist._id, opts).then(handleErrors).then(data => data.json())
    .then(data => data)
    .catch(err => { console.log('Err', err ) })
  },

  getPlaylist: (id) => {
    return fetch(APIROUTE + '/playlists/' + id, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => { return data.json()})
  },

}
export default PlaylistActions
