import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
export default function useFetch(url = '', options = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseURL = url;

  const api = useMemo(() => {
    const defaultConfig = {
      baseURL,
      timeout: 60000,
      headers: {
        'Content-type': ['application/json'],
        'Access-Control-Allow-Origin': '*',
      },
    };

    let instance = axios.create({ ...defaultConfig });

    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      (err) => Promise.reject(err),
    );

    return instance;
  }, []);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    api
      .get(url, options)
      .then((data) => {
        if (isMounted) {
          setData(data.data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [url, options]);

  const reFresh = () => {
    setLoading(true);
    let isMounted = true;
    api
      .get(url, options)
      // .then(res => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data.data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  };

  const postRequest = async (formData) => {
    setLoading(true);
    let isMounted = true;

    try {
      const res = await api.post(url, formData, options);

      isMounted && setData(res.data);
    } catch (error) {
      isMounted && setError(error);
    } finally {
      isMounted && setLoading(false);
    }

    return () => (isMounted = false);
  };

  return { loading, error, data, reFresh, postRequest };
}
