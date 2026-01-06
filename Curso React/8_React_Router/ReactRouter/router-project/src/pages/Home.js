import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao ReactRouter</h1>
      <p>Este é um projeto de estudo utilizando React Router, Hooks e JSON Server.</p>

      <div className="home-cards">
        <div className="home-card">
          <h3>Produtos</h3>
          <p>Acesse a lista de produtos, adicione novos itens e explore o sistema.</p>
        </div>

        <div className="home-card">
          <h3>Sobre</h3>
          <p>Veja informações sobre o projeto e seu propósito no aprendizado.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
