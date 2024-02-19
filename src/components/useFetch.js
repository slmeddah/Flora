import { useEffect, useState } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri);

        if (response.ok) {
          const result = await response.json();
          setData(result);
          setLoading(false);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [uri]);

  return { data, error, loading };
};

export default useFetch;
