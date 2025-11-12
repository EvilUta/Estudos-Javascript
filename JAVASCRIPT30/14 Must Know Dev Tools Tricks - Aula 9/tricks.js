/************************************************************
 🧠 1. Console Tricks
************************************************************/
console.table([{ name: 'Renan', age: 20 }, { name: 'Gustavo', age: 25 }]);
console.time('timer');
// simulação de código
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('timer');
console.group('Debug');
console.log('Etapa 1');
console.log('Etapa 2');
console.groupEnd();

/************************************************************
 ⚙️ 2. Desestruturação
************************************************************/
const user = { name: 'Renan', age: 20, city: 'Tatuí' };
const { name, city } = user;
console.log(name, city); // Renan, Tatuí

/************************************************************
 🧩 3. Optional Chaining (?.)
************************************************************/
const person = { profile: { email: 'teste@email.com' } };
console.log(person?.profile?.email ?? 'sem email');

/************************************************************
 ⚡ 4. Nullish Coalescing (??)
************************************************************/
const valor = 0 ?? 42; // mantém 0
const valor2 = null ?? 42; // 42
console.log(valor, valor2);

/************************************************************
 🧰 5. Short-circuit condition
************************************************************/
let isLogged = true;
let isAdmin = false;
isLogged && console.log('Usuário logado!');
isAdmin || console.log('Sem permissão!');

/************************************************************
 🪄 6. Spread e Rest
************************************************************/
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // spread
console.log(arr2);

const soma = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(soma(1, 2, 3, 4));

/************************************************************
 🧭 7. Map / Filter / Reduce
************************************************************/
const nums = [1, 2, 3, 4];
const dobrados = nums.map(n => n * 2);
const pares = nums.filter(n => n % 2 === 0);
const somaTotal = nums.reduce((acc, n) => acc + n, 0);
console.log(dobrados, pares, somaTotal);

/************************************************************
 🧩 8. Array.from() e Object.entries()
************************************************************/
console.log(Array.from('Renan')); // ['R','e','n','a','n']
console.log(Object.entries({ a: 1, b: 2 })); // [['a',1], ['b',2]]

/************************************************************
 🧱 9. LocalStorage & SessionStorage
 (⚠️ funciona apenas no navegador)
************************************************************/
// localStorage.setItem('tema', 'dark');
// const tema = localStorage.getItem('tema');
// console.log(tema);
// localStorage.removeItem('tema');

/************************************************************
 🧮 10. Intl API (Formatadores nativos)
************************************************************/
const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(2500);
console.log(preco);

/************************************************************
 🔄 11. Async/Await + Fetch
************************************************************/
async function carregarDados() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dados = await resp.json();
  console.log('3 primeiros posts:', dados.slice(0, 3));
}
// carregarDados(); // descomente para testar

/************************************************************
 🧱 12. Debounce e Throttle (exemplo de debounce)
************************************************************/
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const logResize = debounce(() => console.log('Redimensionado!'), 500);
// window.addEventListener('resize', logResize); // descomente no navegador

/************************************************************
 🧩 13. Object.freeze() / Object.seal()
************************************************************/
const pessoa = Object.freeze({ nome: 'Renan' });
pessoa.nome = 'Outro'; // Ignorado
console.log(pessoa);

/************************************************************
 🚀 14. Node.js Tools (CLI úteis)
************************************************************/
// 🔹 npx serve → roda um servidor local instantâneo
// 🔹 npm-check-updates → atualiza dependências automaticamente
// 🔹 eslint / prettier → padroniza e corrige código
// 🔹 nodemon → reinicia o servidor automaticamente ao salvar arquivos
// (esses comandos são usados no terminal, não dentro do JS)
