import React from "react";

function useJsonServer(url, method) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error();
          return response.json();
        })
        .then((data) => {
          setData(data);
          if (loading) setLoading(false);
        })
        .catch((err) => setError(err));
    }, 500);
  }, []);

  return { data, loading, error, setData, setError };
}

export { useJsonServer };
