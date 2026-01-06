import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchDocuments = (docCollection, uid) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!uid) {
      setDocuments([]);
      return;
    }

    const q = query(
      collection(db, docCollection),
      where("uid", "==", uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDocuments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [docCollection, uid]);

  return { documents };
};
