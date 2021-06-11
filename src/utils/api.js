// import { errors } from './error'
// import { showError, showWarning } from './notifications';

export async function callApi(endpoint, method = 'get', body) {
  const headers = {
    'Accept': '*/*',
  }
  
  return fetch(endpoint, {
    headers,
    method,
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 503) {
        console.log('Server is down: HTTP 503');
      }

      if (response.status === 500) {
        return response.json()
        .then(json => {
          console.log('Internal Server Error: HTTP 500');
          return Promise.reject(json)
        })
      }
      if (!response.ok) return response.json()
        .then(json => {
          console.log(json);
        })
      return response.json()
    })
}

