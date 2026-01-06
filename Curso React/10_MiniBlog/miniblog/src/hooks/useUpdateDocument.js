import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export const useUpdateDocument = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDocument = async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
    } catch (err) {
      setError("Erro ao atualizar post.");
    } finally {
      setLoading(false);
    }
  };

  return { updateDocument, loading, error };
};
