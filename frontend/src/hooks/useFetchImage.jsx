// React
import { useState, useEffect } from "react";

export function useFetchGet(endpoint) {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://xivapi.com/" + endpoint);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setImageData(json);
        setError(null);
      } catch (error) {
        setError(`Could not fetch the image (${error} )`);
      }
    };
    fetchData();

    return () => {
      new AbortController().abort();
    };
  }, [endpoint]);
  return { imageData, error };
}
