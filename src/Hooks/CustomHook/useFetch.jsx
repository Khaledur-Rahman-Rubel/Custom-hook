import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); //for data fetching
  const [isLoading, setIsLoading] = useState(true); // if data loding
  const [error, setError] = useState(null); //if catch error

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // data convert to json data
        if (!response.ok) {
          throw Error("data loding is unsuccessful"); //if get error in data fetching
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // data send to use state
        setIsLoading(false); // if get data not need loading
      })
      .catch((error) => {
        // for get any error in data fetching
        setError(error.message);
        setIsLoading(false); //if get error not need data loading
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
