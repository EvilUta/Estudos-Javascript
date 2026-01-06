import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchUserPosts = (uid) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!uid) {
      setDocuments([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const q = query(collection(db, "posts"), where("uid", "==", uid));

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
        setError(err?.message || "Erro ao carregar posts do usuário.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [uid]);

  return { documents, loading, error };
};

