import { useState } from "react";
import styles from "./Login.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const { login, error: authError, loading } = useAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Preencha todos os campos.");
      return;
    }

    const success = await login({ email, password });

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login para continuar</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Aguarde..." : "Entrar"}
        </button>

        {localError && <p className={styles.error}>{localError}</p>}
        {authError && <p className={styles.error}>{authError}</p>}
      </form>
    </div>
  );
};

export default Login;
