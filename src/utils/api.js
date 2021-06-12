export async function callApi(endpoint) {
  return fetch(endpoint)
    .then((response) => {
      return response.json()
    })
}
