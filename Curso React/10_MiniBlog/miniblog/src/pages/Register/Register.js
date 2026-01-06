import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";
import { useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const [success, setSuccess] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault();

  setLocalError("");
  setSuccess("");

  if (password !== confirmPassword) {
    setLocalError("As senhas precisam ser iguais.");
    return;
  }

  const res = await createUser({
    displayName,
    email,
    password,
  });

  if (res) {
    setSuccess("Usuário registrado com sucesso!");
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }
};


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Aguarde..." : "Cadastrar"}
        </button>

        {success && <p className={styles.success}>{success}</p>}
        {localError && <p className={styles.error}>{localError}</p>}
        {authError && <p className={styles.error}>{authError}</p>}
      </form>
    </div>
  );
};

export default Register;
