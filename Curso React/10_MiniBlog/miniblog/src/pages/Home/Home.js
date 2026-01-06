import styles from "./Home.module.css";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchAllDocuments } from "../../hooks/useFetchAllDocuments";
import { normalizeTags } from "../../utils/postValidation";
import CommentsSection from "../../components/CommentsSection";
import { useFetchUserPosts } from "../../hooks/useFetchUserPosts";

const Avatar = ({ name, photoURL }) => {
  const initial = String(name || "U").slice(0, 1).toUpperCase();
  return (
    <div className={styles.avatar}>
      {photoURL ? (
        <img src={photoURL} alt={name} />
      ) : (
        <div className={styles.avatarFallback}>{initial}</div>
      )}
    </div>
  );
};

const PostCard = ({ post, onOpenProfile }) => {
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const authorName = post.createdBy || "Usuário";
  const authorPhoto = post.authorPhotoURL || "";

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.authorRow}>
          <button
            type="button"
            className={styles.avatarButton}
            onClick={() =>
              onOpenProfile({
                uid: post.uid,
                name: authorName,
                photoURL: authorPhoto,
              })
            }
            aria-label={`Ver perfil de ${authorName}`}
          >
            <Avatar name={authorName} photoURL={authorPhoto} />
          </button>
          <div>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.meta}>Por {authorName}</p>
          </div>
        </div>
        <Link to={`/posts/${post.id}`} className={styles.open}>
          Abrir
        </Link>
      </div>

      {post.image && (
        <div className={styles.image}>
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <p className={styles.content}>
        {String(post.content || "").length > 240
          ? `${String(post.content).slice(0, 240)}...`
          : post.content}
      </p>

      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.commentsBox}>
        <CommentsSection
          postId={post.id}
          onOpenProfile={onOpenProfile}
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [tagInput, setTagInput] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [profileModal, setProfileModal] = useState(null);

  const normalizedTag = useMemo(() => {
    const first = normalizeTags(tagInput)[0];
    return first || "";
  }, [tagInput]);

  const { documents: posts, loading, error } = useFetchAllDocuments("posts", {
    tag: activeTag || null,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveTag(normalizedTag);
  };

  const clearSearch = () => {
    setTagInput("");
    setActiveTag("");
  };

  const { documents: userPosts, loading: loadingUserPosts } =
    useFetchUserPosts(profileModal?.uid);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div>
          <h1>MiniBlog</h1>
          <p>Veja os posts mais recentes da comunidade</p>
        </div>

        <Link to="/posts/create" className={styles.create}>
          Criar post
        </Link>
      </div>

      <form onSubmit={handleSearch} className={styles.search}>
        <input
          type="text"
          placeholder="Buscar por tag (ex: react, firebase)"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        <button type="submit" disabled={!normalizedTag}>
          Buscar
        </button>
        <button
          type="button"
          className={styles.secondary}
          onClick={clearSearch}
          disabled={!activeTag && !tagInput}
        >
          Limpar
        </button>
      </form>

      {activeTag && (
        <p className={styles.filterInfo}>
          Filtrando por tag: <strong>#{activeTag}</strong>
        </p>
      )}

      {loading && <p>Carregando posts...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && posts.length === 0 && (
        <div className={styles.empty}>
          <p>Nenhum post encontrado.</p>
          <Link to="/posts/create">Seja o primeiro a postar</Link>
        </div>
      )}

      <div className={styles.feed}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onOpenProfile={(data) => setProfileModal(data)}
          />
        ))}
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
              <Avatar
                name={profileModal.name}
                photoURL={profileModal.photoURL}
              />
              <div>
                <h2>{profileModal.name}</h2>
                <p className={styles.metaModal}>Posts recentes do autor</p>
              </div>
            </div>

            {loadingUserPosts && <p>Carregando...</p>}

            {!loadingUserPosts && userPosts.length === 0 && (
              <p className={styles.muted}>Nenhum post desse autor.</p>
            )}

            <div className={styles.userPosts}>
              {userPosts.slice(0, 10).map((post) => (
                <Link
                  to={`/posts/${post.id}`}
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
                </Link>
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

export default Home;
