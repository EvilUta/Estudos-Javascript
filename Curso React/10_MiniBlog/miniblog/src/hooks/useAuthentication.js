import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import { auth } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ REGISTER
  const createUser = async ({ email, password, displayName }) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName,
      });

      return true;
    } catch (err) {
      let message;

      switch (err.code) {
        case "auth/weak-password":
          message = "A senha deve ter no mínimo 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          message = "Este e-mail já está cadastrado.";
          break;
        case "auth/invalid-email":
          message = "E-mail inválido.";
          break;
        default:
          message = "Erro ao criar usuário.";
      }

      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGIN 
  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      let message;

      switch (err.code) {
        case "auth/user-not-found":
          message = "Usuário não encontrado.";
          break;
        case "auth/wrong-password":
          message = "Senha incorreta.";
          break;
        case "auth/invalid-email":
          message = "E-mail inválido.";
          break;
        default:
          message = "Erro ao fazer login.";
      }

      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    signOut(auth);
  };

  return {
    createUser,
    login,
    logout,
    error,
    loading,
  };
};
