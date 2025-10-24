// Trabalha com promisse
// não precisa usar .then() e .catch()
// async -> trasnforma uma funcao comum em assincrona
// await -> faz o Javascript esperar a promise para continuar
// await so pode ser usada dentro do async
// sao funcoes que andam smpre juntas

async function carregarTodo() { // a palavra async garant a aquiscao async
  const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // colocase o await -> espera ate o fetch seja resolvido
  const todo = await resposta.json(); // retorna uma Promise automaticamente
  console.log(todo.title);
}

carregarTodo();

// async function carregarTodo() {
//   // 1. Faz a requisição HTTP
//   const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
//   // 2. Converte a resposta para JSON (objeto JS)
//   const todo = await resposta.json();
  
//   // 3. Mostra o título da tarefa
//   console.log(todo.title);
// }

// // 4. Executa a função
// carregarTodo();