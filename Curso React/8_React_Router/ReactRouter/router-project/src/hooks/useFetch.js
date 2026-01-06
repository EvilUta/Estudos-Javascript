import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = url.split("?")[0];

  // configurar requisições POST e DELETE
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    }

    if (method === "DELETE") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
      });
      setMethod("DELETE");
      setItemId(data);
    }
  };

  // GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao carregar dados!");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // POST / DELETE
  useEffect(() => {
    const httpRequest = async () => {
      if (!method) return;

      setLoading(true);

      let fetchUrl = url;
      let fetchOptions = config;

      if (method === "DELETE") {
        fetchUrl = `${baseUrl}/${itemId}`;
      }

      if (method === "POST") {
        fetchUrl = baseUrl;
      }

      try {
        const res = await fetch(fetchUrl, fetchOptions);
        if (!res.ok) throw new Error("Erro ao enviar requisição!");

        setCallFetch((prev) => !prev); // força reload da lista

      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig, loading, error };
};
