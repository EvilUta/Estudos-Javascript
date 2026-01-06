import styles from "./About.module.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { auth, db } from "../../firebase/config";
import { updateEmail, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const About = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthValue();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [about, setAbout] = useState("");

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");

  const currentEmail = useMemo(() => user?.email || "", [user]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;
    setDisplayName(user.displayName || "");
    setEmail(user.email || "");
    setPhotoURL(user.photoURL || "");
    // carrega "sobre você" do Firestore
    const loadProfile = async () => {
      try {
        const ref = doc(db, "profiles", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setAbout(data.about || "");
        }
      } catch (_) {
        // ignora erro de leitura para não travar a página
      }
    };
    loadProfile();
  }, [user]);

  if (!user) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccess("");
    setLoading(true);

    try {
      const nameValue = displayName.trim();
      const emailValue = email.trim();
      const photoValue = photoURL.trim();
      const aboutValue = about.trim();

      if (!nameValue) {
        setFormError("Nome é obrigatório.");
        return;
      }

      if (!emailValue) {
        setFormError("E-mail é obrigatório.");
        return;
      }

      if (!emailValue.includes("@")) {
        setFormError("E-mail inválido.");
        return;
      }

      if (aboutValue.length > 200) {
        setFormError("O campo sobre você deve ter no máximo 200 caracteres.");
        return;
      }

      const currentUser = auth.currentUser;
      if (!currentUser) {
        setFormError("Usuário não autenticado.");
        return;
      }

      await updateProfile(currentUser, {
        displayName: nameValue,
        // updateProfile não aceita null, use string vazia para remover
        photoURL: photoValue || "",
      });

      if (emailValue !== currentEmail) {
        await updateEmail(currentUser, emailValue);
      }

      await setDoc(
        doc(db, "profiles", currentUser.uid),
        {
          about: aboutValue,
          photoURL: photoValue || null,
        },
        { merge: true }
      );

      // Atualiza o contexto para refletir no NavBar sem precisar de refresh.
      // Garantir que o contexto reflita remoção de foto
      setUser({ ...currentUser, photoURL: photoValue || "" });
      setSuccess("Perfil atualizado com sucesso.");
    } catch (err) {
      if (err?.code === "auth/requires-recent-login") {
        setFormError(
          "Para alterar o e-mail, faça login novamente e tente de novo."
        );
      } else if (err?.code === "auth/invalid-email") {
        setFormError("E-mail inválido.");
      } else if (err?.code === "auth/email-already-in-use") {
        setFormError("Este e-mail já está em uso.");
      } else {
        setFormError("Erro ao atualizar perfil.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemovePhoto = async () => {
    setPhotoURL("");
  };

  return (
    <div className={styles.profile}>
      <h1>Meu perfil</h1>
      <p>Atualize seu nome, e-mail e foto</p>

      <div className={styles.card}>
        <div className={styles.avatarRow}>
          <div className={styles.avatar}>
            {photoURL ? (
              <img src={photoURL} alt="Foto do perfil" />
            ) : (
              <div className={styles.avatarFallback}>
                {(displayName || user.email || "U").slice(0, 1).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <div className={styles.name}>{user.displayName || "Usuário"}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Foto (URL)</span>
            <input
              type="url"
              placeholder="https://..."
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </label>

          <label>
            <span>Sobre você (opcional, até 200 caracteres)</span>
            <textarea
              maxLength={200}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Conte um pouco sobre você..."
            />
            <span className={styles.counter}>{about.length}/200</span>
          </label>

          {photoURL.trim() && (
            <div className={styles.preview}>
              <img src={photoURL.trim()} alt="Prévia da foto" />
            </div>
          )}

          <div className={styles.actionsRow}>
            <button type="button" className={styles.secondary} onClick={handleRemovePhoto}>
              Remover foto
            </button>
            {!loading && <button>Salvar</button>}
            {loading && <button disabled>Aguarde...</button>}
          </div>

          {success && <p className={styles.success}>{success}</p>}
          {formError && <p className={styles.error}>{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default About;
