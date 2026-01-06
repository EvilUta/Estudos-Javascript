import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

export const useDeleteDocument = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteDocument = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (err) {
      setError("Erro ao excluir post.");
    } finally {
      setLoading(false);
    }
  };

  return { deleteDocument, loading, error };
};
