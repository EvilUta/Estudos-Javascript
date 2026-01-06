import styles from "./CommentsSection.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useInsertDocument } from "../hooks/useInsertDocument";
import { useFetchComments } from "../hooks/useFetchComments";

const getInitial = (value) => String(value || "U").trim().slice(0, 1).toUpperCase();

const CommentItem = ({ comment, onOpenProfile }) => {
  const photoURL = comment.authorPhotoURL || "";
  const name = comment.createdBy || "Usuário";

  return (
    <div className={styles.comment}>
      <button
        type="button"
        className={styles.avatarButton}
        onClick={() =>
          onOpenProfile &&
          onOpenProfile({
            uid: comment.uid,
            name,
            photoURL,
          })
        }
        aria-label={`Ver perfil de ${name}`}
      >
        <div className={styles.avatar}>
          {photoURL ? (
            <img src={photoURL} alt={name} />
          ) : (
            <div className={styles.avatarFallback}>{getInitial(name)}</div>
          )}
        </div>
      </button>

      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
        </div>
        <p className={styles.text}>{comment.content}</p>
      </div>
    </div>
  );
};

const CommentsSection = ({ postId, onOpenProfile }) => {
  const { user } = useAuthValue();
  const { insertDocument, loading: sending, error: insertError } =
    useInsertDocument("comments");
  const { comments, loading, error } = useFetchComments(postId);

  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!user) return;

    const value = content.trim();
    if (!value) {
      setFormError("Digite um comentário.");
      return;
    }

    if (value.length > 500) {
      setFormError("O comentário deve ter no máximo 500 caracteres.");
      return;
    }

    try {
      await insertDocument({
        postId,
        content: value,
        uid: user.uid,
        createdBy: user.displayName || user.email,
        authorPhotoURL: user.photoURL || "",
      });

      setContent("");
    } catch (err) {
      setFormError("Erro ao enviar comentário.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <span className={styles.count}>{comments.length} comentário(s)</span>
      </div>

      {loading && <p className={styles.muted}>Carregando comentários...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && comments.length === 0 && (
        <p className={styles.muted}>Seja o primeiro a comentar.</p>
      )}

      <div className={styles.list}>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onOpenProfile={onOpenProfile}
          />
        ))}
      </div>

      {!user && (
        <p className={styles.muted}>
          <Link to="/login">Faça login</Link> para comentar.
        </p>
      )}

      {user && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Escreva um comentário..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button disabled={sending} type="submit">
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      )}

      {insertError && <p className={styles.error}>{insertError}</p>}
      {formError && <p className={styles.error}>{formError}</p>}
    </div>
  );
};

export default CommentsSection;
