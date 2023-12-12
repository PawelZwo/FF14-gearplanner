// React
import { useState, useEffect } from "react";

export function useFetchPost(endpoint, objData) {
  const [dataPost, setDataPost] = useState(null);
  const [isPendingPost, setIsPendingPost] = useState(true);
  const [errorPost, setErrorPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPendingPost(true);
      const postData = {
        method: "POST",
        body: JSON.stringify(objData),
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await fetch(
          "http://192.168.0.73:8000/" + endpoint,
          postData
        );
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPendingPost(false);
        setDataPost(json);
        setErrorPost(null);
      } catch (error) {
        setErrorPost(`Could not Fetch Data (${error} )`);
        setIsPendingPost(false);
      }
    };
    fetchData();

    return () => {
      new AbortController().abort();
    };
  }, [endpoint, objData]);
  return { dataPost, isPendingPost, errorPost };
}
