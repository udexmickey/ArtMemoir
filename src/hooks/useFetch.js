import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useFetch(url = '', options = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    axios
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
    axios
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
      const res = await axios.post(url, formData, options);

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
