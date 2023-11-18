import { useEffect } from "react";

const NewsFeed = () => {
  useEffect(() => {
    var myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    
    fetch("https://eu.lodestonenews.com/news/feed", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    return () => {
      new AbortController().abort();
    };
  }, []);

  return <>DUPA</>;
};

export default NewsFeed;
