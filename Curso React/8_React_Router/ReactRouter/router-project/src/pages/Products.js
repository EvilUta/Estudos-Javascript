import "./Products.css";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const url = "http://localhost:3001/products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const searchUrl = query ? `${url}?q=${query}` : url;
  const { data: products, httpConfig, loading, error } = useFetch(searchUrl);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState(query);

  useEffect(() => {
    setSearch(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: Number(price),
    };

    if (
      products &&
      products.some((p) => p.name.toLowerCase() === name.toLowerCase())
    ) {
      alert("Este produto ja existe!");
      return;
    }

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: search });
  };

  const handleDelete = (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir?");
    if (!confirmar) return;

    httpConfig(id, "DELETE");
  };

  return (
    <div className="products-container">
      <h2>Lista de Produtos</h2>

      {loading && <p className="loading">Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="Buscar produto por nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <ul className="products-list">
        {products &&
          products.map((product) => (
            <li key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-info">
                {product.name} - R$ {product.price}
              </Link>
              <button
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Excluir
              </button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              placeholder="Nome do produto"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Preco:
            <input
              type="number"
              value={price}
              placeholder="Preco"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>

          <input className="create-btn" type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default Products;
