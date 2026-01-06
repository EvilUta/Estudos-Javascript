import './App.css';
import { useState } from 'react';
import { useFetch } from "./hooks/useFetch";

const url = 'http://localhost:3001/products';

function App() {

  // useFetch para GET + POST
  const { data: products, httpConfig, loading, error } = useFetch(url);

  const [name , setName] = useState("");
  const [price , setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: Number(price),
    };

    // Evita duplicados (somente quando products já carregou)
    if (products && products.some((p) => 
      p.name.toLowerCase() === name.toLowerCase()
    )) {
      alert("Este produto já existe!");
      return;
    }

    // POST
    httpConfig(product, "POST");

    // limpa campos
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* Estado de carregamento */}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {/* Renderização de produtos */}
      <ul>
        {products && products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} — R$ {product.price}
          </li>
        ))}
      </ul>

      {/* Formulário */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name='name' 
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name='price' 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <input type="submit" value='criar' />
        </form>
      </div>
    </div>
  );
}

export default App;
