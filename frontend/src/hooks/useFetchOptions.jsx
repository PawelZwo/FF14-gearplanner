// React
import { useState, useEffect } from "react";

export function useFetchOptions(endpoint) {
  const [dataOptions, setDataOptions] = useState(null);
  const [errorOptions, setErrorOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.0.73:8000/" + endpoint, {
          method: "OPTIONS",
        });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setDataOptions(json.actions.POST);
        setErrorOptions(null);
      } catch (error) {
        setErrorOptions(`Could not fetch data (${error} )`);
      }
    };
    fetchData();

    return () => {
      new AbortController().abort();
    };
  }, [endpoint]);
  return { dataOptions, errorOptions };
}
