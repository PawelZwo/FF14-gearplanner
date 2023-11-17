// React imports
import { useState, useEffect } from "react";

export function useFetchPost(endpoint) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`Could not Fetch Data (${error} )`);
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
