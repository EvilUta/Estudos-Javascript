import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  // Dica: confira no Firebase Console > Storage qual é o "bucket name" correto.
  // Em muitos projetos ele é "<project-id>.appspot.com".
  apiKey: "AIzaSyDlGjG8YwpSoKYPe7Nam1tNDfTs6Ral2IE",
  authDomain: "mini-blog-423c7.firebaseapp.com",
  projectId: "mini-blog-423c7",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    "mini-blog-423c7.appspot.com",
  messagingSenderId: "259621498104",
  appId: "1:259621498104:web:12475e8257c2e66c925f0d",
  measurementId: "G-38S7NT8LNB"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
