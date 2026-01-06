import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        if (!res.ok) throw new Error("Produto nao encontrado");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="details-loading">Carregando...</p>;
  if (!product) return <p className="details-error">Produto nao encontrado.</p>;

  return (
    <div className="product-details-container">
      <h1 className="product-details-title">Detalhes do Produto</h1>

      <p className="product-details-item"><strong>ID:</strong> {product.id}</p>
      <p className="product-details-item"><strong>Nome:</strong> {product.name}</p>
      <p className="product-details-item"><strong>Preco:</strong> R$ {product.price}</p>

      <div className="details-links-container">
        <div className="details-links">
          <Link to="/products" className="details-btn">Voltar</Link>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? "details-btn active" : "details-btn"
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="specs"
            className={({ isActive }) =>
              isActive ? "details-btn active" : "details-btn"
            }
          >
            Especificacoes
          </NavLink>
        </div>

        {/* Conteudo das rotas fica abaixo */}
        <div className="details-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
