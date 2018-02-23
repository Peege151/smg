function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

WriterActions(id) {
  fetch('https://smg-api.herokuapp.com/api/writers/' + id, {

  //fetch('https://smg-api.herokuapp.com/api/writers/' + this.props.match.params.writer, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
  .then(handleErrors)
  .then(data => {
    return data.json();
  })

}
export default WriterActions
