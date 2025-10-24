// ou .then ou .catch()
// é que no caso do async await nao se usa fetch
// entao throw e o contrario de throw que indica erro
// seguimento -> try -> throw -> catch -> declara um erro NOVO
// E lista ele com o catch

// try → (executa o código normal)
//    ↓
// throw → (lança um erro)
//    ↓
// catch → (pega o erro lançado)


async function carregarTodo() {
  try {
    const resposta = await fetch('https://url-invalida-qualquer.com/todos/1');

    // Se o servidor retornar erro HTTP (ex: 404), o fetch NÃO lança erro automático
    // Então é bom checar manualmente:
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const todo = await resposta.json();
    console.log("Título:", todo.title);
  } 
  catch (erro) {
    console.error("❌ Ocorreu um erro ao carregar os dados:", erro.message);
  }
}

carregarTodo();
