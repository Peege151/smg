function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

let PlaylistActions = {
  getUserPlaylists: () => {
    console.log('Grabbing Playlists!')
    return fetch('http://localhost:8081/api/playlists/user/', {
      method: 'GET',
      credentials: 'include',
      headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log('Data? ', data)
      return data;
    })
    .catch(err => { console.log('Err', err )})
  },
  createNewPlaylist: (body, songToInitiatePlaylist) => {
    let opts = { method: 'POST', credentials: 'include', headers: { "Content-Type": "application/json" }};
    opts.body = body;
    opts.body.songs = songToInitiatePlaylist;
    opts.body = JSON.stringify(body);
    console.log('Body? ', opts.body)
    return fetch('http://localhost:8081/api/playlists/', opts).then(handleErrors).then(data => data.json())
    .then(data => {
      console.log('response from create new playlist', data)
      return data;
    })
    .catch(err => { console.log('Err', err)})
  },

  editPlaylist: (playlist) => {
    playlist.songs = [...new Set(playlist.songs)];
    console.log('Songs As We Send Them Up?', playlist)
    let opts = {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(playlist),
        headers: { "Content-Type": "application/json" }
    };
    return fetch('http://localhost:8081/api/playlists/' + playlist._id, opts).then(handleErrors).then(data => data.json())
    .then(data => {
      console.log('response from playlist')
      return data;
    })
  }

}
export default PlaylistActions
