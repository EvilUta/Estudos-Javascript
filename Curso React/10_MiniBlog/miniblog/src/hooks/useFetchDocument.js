import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!docCollection || !id) return;

    setLoading(true);
    setError(null);

    const docRef = doc(db, docCollection, id);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setDocument(null);
          setError("Post não encontrado.");
          setLoading(false);
          return;
        }

        setDocument({ id: snapshot.id, ...snapshot.data() });
        setLoading(false);
      },
      () => {
        setDocument(null);
        setError("Erro ao carregar post.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [docCollection, id]);

  return { document, loading, error };
};
