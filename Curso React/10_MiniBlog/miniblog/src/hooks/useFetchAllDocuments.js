import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

export const useFetchAllDocuments = (docCollection, options = {}) => {
  const { tag } = options;

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizedTag = useMemo(() => {
    const value = String(tag ?? "").trim().toLowerCase();
    return value || null;
  }, [tag]);

  useEffect(() => {
    if (!docCollection) return;

    setLoading(true);
    setError(null);

    const base = collection(db, docCollection);
    // Quando filtra por tag + orderBy, o Firestore pode exigir um índice composto.
    // Para evitar erro em projetos de estudo, filtramos no servidor e ordenamos no client.
    const q = normalizedTag
      ? query(base, where("tags", "array-contains", normalizedTag))
      : query(base);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        list.sort((a, b) => {
          const aSec = a?.createdAt?.seconds ?? 0;
          const bSec = b?.createdAt?.seconds ?? 0;
          return bSec - aSec;
        });

        setDocuments(list);
        setLoading(false);
      },
      (err) => {
        setDocuments([]);
        setError(err?.message || "Erro ao carregar posts.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [docCollection, normalizedTag]);

  return { documents, loading, error };
};
