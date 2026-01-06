import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { documents: posts } = useFetchDocuments("posts", user ? user.uid : null);
  const { deleteDocument, loading: deleting, error } = useDeleteDocument("posts");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const handleDelete = async (postId) => {
    const shouldDelete = window.confirm(
      "Tem certeza que deseja excluir este post?"
    );

    if (!shouldDelete) return;

    await deleteDocument(postId);
  };

  return (
    <div className={styles.dashboard}>
      <h1>Meus Posts</h1>

      {posts.length === 0 && <p>Você ainda não criou posts.</p>}

      {error && <p className={styles.error}>{error}</p>}

      {posts.map((post) => (
        <div className={styles.postRow} key={post.id}>
          <h3>{post.title}</h3>

          <div className={styles.actions}>
            <Link to={`/posts/${post.id}`}>Ver</Link>
            <Link to={`/posts/edit/${post.id}`}>Editar</Link>
            <button
              type="button"
              disabled={deleting}
              onClick={() => handleDelete(post.id)}
              className={styles.delete}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Dashboard;
