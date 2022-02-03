import React from "react";

function useJsonServer(url) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) throw Error();
          return response.json();
        })
        .then((responde_data) => {
          setData(responde_data);
          if (loading) setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") setError(err);
        });
    }, 500);
    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
}

export { useJsonServer };
