import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  //creating a loder
  const [isPending, setIsPending] = useState(false);
  //createing an erro message
  const [error, setError] = useState(null);
  //also created an abort erro in case the component unmounts
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not Fetch the Data");
          console.log(err.message);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isPending, error };
};
