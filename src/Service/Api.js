import { API_ROOT } from '../config';

const callApi = (endpoint, method, headers) => {
  const init = {
    method,
    headers,
  };

  return fetch(API_ROOT, init)
    .then(response => Promise.all([response, response.text(), response.headers]))
    .then(([response, text, respHeaders]) => {
      let body = {};
      try {
        if (text) {
          body = JSON.parse(text);
        }
      } catch (err) {
        return Promise.reject(err);
      }
      if (!response.ok) {
        return Promise.reject(body);
      }
      return { body, headers: respHeaders };
    })
    .then(response => ({ response }), error => ({ error: error.message || 'Something bad happened' }));
};

export default callApi;
