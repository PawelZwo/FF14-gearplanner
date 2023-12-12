// React
import { useState, useEffect } from "react";

export function useFetchGet(endpoint) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch("http://192.168.0.73:8000/" + endpoint);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`Could not fetch data (${error} )`);
        setIsPending(false);
      }
    };
    fetchData();

    return () => {
      new AbortController().abort();
    };
  }, [endpoint]);
  return { data, isPending, error };
}
