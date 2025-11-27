// Tipos Primitivos e Tipos de Objeto

// tipos primitivos
// number , string, boolean, null e undefined

// tipos de objetos

// Objeto é um conjunto de propriedades -> cada propriedade tem um NOME e um VALOR
// utiliza chaves {}

{ propriedade: 'valor' }
// ↑ Isso isolado não faz nada, apenas mostra a forma do objeto.

// Criando um objeto com 3 propriedades:
var objeto = { 
    propriedade: 'valor1', 
    propriedade2: 10, 
    propriedade3: true
}

console.log(objeto)               // mostra o objeto completo
console.log(objeto.propriedade)   // acessa apenas o valor da propriedade "propriedade"

// Organizando dados dentro de um objeto "pessoa"
var pessoa = {
    nome: 'Renan',
    idade: 21,
    peso: 63,
    altura: 1.64
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.altura)
console.log(pessoa.peso)

// Função armazenada em variável (tipo função é um OBJETO também!)
var myvar = function(){
    return 'variavel myvar'
}

console.log(myvar)   // mostra a função em si (o "corpo" da função)
console.log(myvar()) // executa a função e mostra o retorno

// metodos
var pessoa = {
  nome: "Renan",

  falar: function() {
    return "Olá, eu sou o Renan!";
  }
};

console.log(pessoa.falar());

// metodo com THIS
var pessoa = {
  nome: "Renan",
  idade: 21,

  apresentar: function() {
    return "Meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.";
  }
};

console.log(pessoa.apresentar());

