import * as axios from "axios";

import { useState } from "react";

const useFetch = ({ onSuccess, onError }) => {
  const [response, setResponse] = useState({
    data: null,
    errors: null,
    loading: null,
  });

  const query = ({ url, method, data }) => {
    setResponse(() => ({ data: null, errors: null, loading: true }));

    axios
      .request({
        baseURL: process.env.REACT_APP_API_URL,
        method,
        url,
        data,
      })
      .then((e) => {
        setResponse(() => ({
          error: null,
          loading: false,
          data: e.data.data,
        }));
        onSuccess && onSuccess(e.data.data);
      })
      .catch((error) => {
        const errors = error.response || [{ message: "Something went wrong!" }];
        setResponse(() => ({
          data: null,
          loading: false,
          errors,
        }));
        onError && onError(errors);
      });
  };
  return [query, response];
};

export { useFetch };
