// Função que busca um usuário no GitHub usando template string
async function fetchUser(user) {
  const url = `https://api.github.com/users/${user}`;
  const resp = await fetch(url);

  if (!resp.ok) {
    // lança um erro caso o servidor retorne 404, 500, etc
    throw new Error(`Erro HTTP ${resp.status} ao buscar ${user}`);
  }

  // retorna os dados convertidos em JSON
  return resp.json();
}

// Função principal que busca vários usuários em paralelo
async function getUsers() {
  const users = ["EvilUta", "willianjusten", "torvalds"];

  try {
    // map cria um array de Promises (uma pra cada user)
    const promises = users.map(user => fetchUser(user));

    // Promise.all resolve TODAS ao mesmo tempo (paralelamente)
    const results = await Promise.all(promises);

    // Exibe o resultado final no console
    results.forEach(user => {
      console.log(`${user.login} tem ${user.public_repos} repositórios públicos.`);
    });

  } catch (err) {
    console.error("❌ Erro ao buscar usuários:", err.message);
  }
}

getUsers();
