import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // POST
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    }
  };

  // 1 - GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        // 👇 AQUI você muda
        if (!res.ok) {
          throw new Error("Erro ao carregar dados!");
        }

        const json = await res.json();
        setData(json);

      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 2 - POST effect
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {

        setLoading(true);

        try {
          const res = await fetch(url, config);

          // 👇 AQUI você muda
          if (!res.ok) {
            throw new Error("Erro ao enviar dados!");
          }

          const json = await res.json();
          setCallFetch(json);

        } catch (err) {
          setError(err.message);
        }

        setLoading(false);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
