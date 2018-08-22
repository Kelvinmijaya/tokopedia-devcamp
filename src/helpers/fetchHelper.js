import qs from "querystring";
import { isEmpty } from "lodash";

export default (method = "GET", url, queries, additionalOptions = {}) => {
  const endpoint = `https://peaceful-eyrie-66543.herokuapp.com/api${url}${
    queries && !isEmpty(queries) ? `?${qs.stringify(queries)}` : ""
  }`;
  const opts = {
    method,
    ...additionalOptions,
    headers: {
      ...additionalOptions.headers
    }
  };

  return fetch(endpoint, opts).then(res => {
    if (res.status === 200) {
      return res
        .json()
        .then(result => {
          return result;
        })
        .catch(error => {
          return error;
        });
    }
    return res.json().then(error => {
      return error;
    });
  });
};
