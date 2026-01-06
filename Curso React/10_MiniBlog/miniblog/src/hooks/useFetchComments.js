import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) {
      setComments([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const q = query(collection(db, "comments"), where("postId", "==", postId));

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
          return aSec - bSec;
        });

        setComments(list);
        setLoading(false);
      },
      (err) => {
        setComments([]);
        setError(err?.message || "Erro ao carregar comentários.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [postId]);

  return { comments, loading, error };
};

