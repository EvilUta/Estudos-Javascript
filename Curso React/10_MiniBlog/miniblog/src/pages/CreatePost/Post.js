import styles from "./Post.module.css";
import { Link, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useFetchUserPosts } from "../../hooks/useFetchUserPosts";
import CommentsSection from "../../components/CommentsSection";
import { useState } from "react";

const Post = () => {
  const { id } = useParams();
  const { user } = useAuthValue();
  const { document: post, loading, error } = useFetchDocument("posts", id);
  const [profileModal, setProfileModal] = useState(null);
  const { documents: userPosts, loading: loadingUserPosts } =
    useFetchUserPosts(profileModal?.uid);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!post) return null;

  const canEdit = user && post.uid === user.uid;

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h1>{post.title}</h1>
        <div className={styles.actions}>
          <Link to="/dashboard">Voltar</Link>
          {canEdit && <Link to={`/posts/edit/${post.id}`}>Editar</Link>}
        </div>
      </div>

      {post.image && (
        <div className={styles.image}>
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <p className={styles.meta}>Por {post.createdBy || "Usuário"}</p>

      {Array.isArray(post.tags) && post.tags.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.content}>{post.content}</div>

      <div className={styles.commentsBox}>
        <CommentsSection
          postId={post.id}
          onOpenProfile={(data) => setProfileModal(data)}
        />
      </div>

      {profileModal && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setProfileModal(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>
                {profileModal.photoURL ? (
                  <img src={profileModal.photoURL} alt={profileModal.name} />
                ) : (
                  <div className={styles.avatarFallback}>
                    {(profileModal.name || "U").slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <h2>{profileModal.name}</h2>
                <p className={styles.meta}>Posts recentes do autor</p>
              </div>
            </div>

            {loadingUserPosts && <p>Carregando...</p>}

            {!loadingUserPosts && userPosts.length === 0 && (
              <p className={styles.muted}>Nenhum post desse autor.</p>
            )}

            <div className={styles.userPosts}>
              {userPosts.slice(0, 10).map((post) => (
                <a
                  href={`/posts/${post.id}`}
                  key={post.id}
                  className={styles.userPostItem}
                  onClick={() => setProfileModal(null)}
                >
                  <div>
                    <div className={styles.userPostTitle}>{post.title}</div>
                    <div className={styles.userPostMeta}>
                      {Array.isArray(post.tags) && post.tags.length > 0
                        ? post.tags.slice(0, 3).map((t) => `#${t}`).join(" ")
                        : "Sem tags"}
                    </div>
                  </div>
                  <span className={styles.linkIcon}>→</span>
                </a>
              ))}
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.secondary}
                onClick={() => setProfileModal(null)}
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

export default Post;
