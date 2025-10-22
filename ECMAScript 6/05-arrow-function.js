const ireland = ['Dublin','Galway','Cork'];

// MAP -> funcao pega array e retorna um novo array apartir do array anterior
// Necessariamente o MAP precisa de um conjunto de array para poder ser colocado 
// da para fazer com string tambem
// let nome = 'Renan';
// let letras = Array.from(nome).map(letra => letra.toUpperCase());
// console.log(letras); -> ['R', 'E', 'N', 'A', 'N']

const love = ireland.map(function(name){
    return `I love ${name}!`; //template string
});     

// Vou transformar esse array em uma arrow function

const loveArrow = ireland.map((name) => {
    return `I love ${name}!`; 
});     

console.log(loveArrow);

// Outra forma da arrow function

const loveArrowSingle = ireland.map(name => {
    return `I love ${name}!`; 
})

console.log(loveArrowSingle)

// Uma outra forma e usar uma unica linha e com isso voce nao precisa usar o return e nem as chaves

const loveArrowOneLine = ireland.map(name => `I love ${name}!`);
console.log(loveArrowOneLine)

// Uma outra forma numa cadeiacao de metodos fica muito mais facil a leitura

const loveChain = ireland
    .filter(name => name === 'Dublin') // ele vai filtrar e so vai passar se name = Dublin
    .map(name => `I love ${name}!`)

console.log(loveChain)


// Template da arrow function -> declara uma variavel com valores e depois se utiliza o =>{ } ai nos temos a arrow function que necessariamente tem que ter um return
// const nomeDaFuncao = (param1, param2, ...) => {
//   // corpo da função
//   return resultado;
// };


