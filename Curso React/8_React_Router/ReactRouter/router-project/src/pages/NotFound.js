import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A rota que você tentou acessar não existe.</p>

      <Link to="/" className="notfound-btn">
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFound;
