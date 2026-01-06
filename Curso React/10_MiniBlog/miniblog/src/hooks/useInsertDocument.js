import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

export const useInsertDocument = (docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertDocument = async (document) => {
    setLoading(true);
    setError(null);

    try {
      const docRef = await addDoc(collection(db, docCollection), {
        ...document,
        createdAt: Timestamp.now(),
      });

      return docRef;
    } catch (err) {
      setError("Erro ao criar post.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { insertDocument, loading, error };
};
