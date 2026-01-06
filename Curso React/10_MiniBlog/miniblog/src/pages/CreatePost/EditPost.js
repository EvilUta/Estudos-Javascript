import styles from "./CreatePost.module.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import {
  normalizeImageUrl,
  normalizeTags,
  validatePostInput,
} from "../../utils/postValidation";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthValue();

  const { document: post, loading: loadingPost, error: postError } =
    useFetchDocument("posts", id);

  const { updateDocument, loading: saving, error: saveError } =
    useUpdateDocument("posts");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [formError, setFormError] = useState("");

  const tags = useMemo(() => normalizeTags(tagsInput), [tagsInput]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    if (!user || !post) return;

    if (post.uid !== user.uid) {
      navigate("/dashboard");
      return;
    }

    setTitle(post.title || "");
    setContent(post.content || "");
    setImageUrl(post.image || "");
    setTagsInput(Array.isArray(post.tags) ? post.tags.join(", ") : "");
  }, [post, user, navigate]);

  if (!user) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const validation = validatePostInput({ title, content, imageUrl, tags });
    if (!validation.ok) {
      setFormError(validation.error);
      return;
    }

    const nextImageUrl = normalizeImageUrl(imageUrl);

    try {
      await updateDocument(id, {
        title: title.trim(),
        content: content.trim(),
        image: nextImageUrl,
        tags,
      });

      navigate("/dashboard");
    } catch (err) {
      setFormError(err?.message || "Erro ao salvar post.");
    }
  };

  if (loadingPost) return <p>Carregando...</p>;

  return (
    <div className={styles.create}>
      <h1>Editar post</h1>
      <p>Atualize o conteúdo do seu post</p>

      {postError && <p className={styles.error}>{postError}</p>}

      {post && (
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

          {!saving && <button>Salvar</button>}
          {saving && <button disabled>Aguarde...</button>}

          {saveError && <p className={styles.error}>{saveError}</p>}
          {formError && <p className={styles.error}>{formError}</p>}
        </form>
      )}
    </div>
  );
};

export default EditPost;
