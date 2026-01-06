import styles from "./CreatePost.module.css";
import { useEffect, useMemo, useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import {
  normalizeImageUrl,
  normalizeTags,
  validatePostInput,
} from "../../utils/postValidation";

const CreatePost = () => {
  const { user } = useAuthValue();
  const navigate = useNavigate();

  const { insertDocument, error } = useInsertDocument("posts");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const [formError, setFormError] = useState("");
  const [postCreated, setPostCreated] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const tags = useMemo(() => normalizeTags(tagsInput), [tagsInput]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setPostCreated(false);
    setSubmitting(true);

    const validation = validatePostInput({ title, content, imageUrl, tags });
    if (!validation.ok) {
      setFormError(validation.error);
      setSubmitting(false);
      return;
    }

    const postImageUrl = normalizeImageUrl(imageUrl);

    // UX otimista: mostra sucesso e limpa campos sem depender do await.
    const insertPromise = insertDocument({
      title: title.trim(),
      content: content.trim(),
      image: postImageUrl,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
      authorPhotoURL: user.photoURL || "",
    });

    setTitle("");
    setContent("");
    setImageUrl("");
    setTagsInput("");
    setPostCreated(true);
    setSubmitting(false);

    Promise.resolve(insertPromise).catch((err) => {
      setPostCreated(false);
      setFormError(err?.message || "Erro ao criar post.");
    });
  };

  return (
    <div className={styles.create}>
      <h1>Criar post</h1>
      <p>Escreva e compartilhe sua ideia</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>Título</span>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <label>
          <span>URL da imagem (obrigatória)</span>
          <input
            type="url"
            required
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        {imageUrl.trim() && (
          <div className={styles.preview}>
            <img src={normalizeImageUrl(imageUrl)} alt="Prévia da imagem" />
          </div>
        )}

        <label>
          <span>Tags (obrigatório, separadas por vírgula)</span>
          <input
            type="text"
            required
            placeholder="ex: react, firebase, javascript"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
          />
        </label>

        {tags.length > 0 && (
          <div className={styles.tagsPreview} aria-label="Prévia das tags">
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {!submitting && <button>Criar post</button>}
        {submitting && <button disabled>Aguarde...</button>}

        {error && <p className={styles.error}>{error}</p>}
        {formError && <p className={styles.error}>{formError}</p>}
      </form>

      {postCreated && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <h2>Post criado com sucesso</h2>
            <p>Deseja conferir em “Meus Posts” no Dashboard?</p>
            <div className={styles.modalActions}>
              <button type="button" onClick={() => navigate("/dashboard")}>
                Conferir em Dashboard
              </button>
              <button
                type="button"
                className={styles.secondary}
                onClick={() => setPostCreated(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
