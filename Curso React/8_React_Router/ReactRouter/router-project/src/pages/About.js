import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>Sobre o Projeto</h1>

      <p>
        Este projeto foi desenvolvido como parte do estudo de React, abordando
        conceitos importantes como React Router, Hooks personalizados, consumo de API
        com JSON Server e organização de componentes e páginas.
      </p>

      <div className="about-card">
        <h3>O que foi aprendido?</h3>
        <ul>
          <li>📌 Rotas com React Router</li>
          <li>📌 Criar hooks personalizados (useFetch)</li>
          <li>📌 Requisições GET e POST</li>
          <li>📌 Organização de páginas e componentes</li>
          <li>📌 Estilização modular com CSS</li>
        </ul>
      </div>

      <p className="about-footer">
        Projeto criado para fins educacionais — React do Zero ao Avançado.
      </p>
    </div>
  );
}

export default About;
