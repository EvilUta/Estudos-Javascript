const axios = require('axios');

const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json';

axios.get(url, { timeout: 20000 }) // 20 segundos
  .then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);
  })
  .catch(err => console.error("Erro ao buscar dados:", err.message));

  // Não consegui resolver Provavelmente a url ta com problema