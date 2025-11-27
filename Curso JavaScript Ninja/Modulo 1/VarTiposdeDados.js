// ----------------------------------------------
// Variáveis e como funcionam
// ----------------------------------------------

var x; // Declarando a variável 'x' sem valor inicial

x = 0; // Atribuindo o valor 0
console.log(x); // Exibe: 0

x = 1; // Mudando o valor (variáveis são mutáveis)
console.log(x); // Exibe: 1

// Variáveis são mutáveis, ou seja,
// você pode trocar o valor quando quiser.

x = 1.2; // Números decimais também são válidos
console.log(x); // Exibe: 1.2

// Você pode criar variáveis com qualquer nome válido
var nomequalquer = 10;
console.log(nomequalquer); // Exibe: 10

// ----------------------------------------------
// Tipos de dados mais comuns em JavaScript
// ----------------------------------------------
// number     -> números (inteiros ou decimais)
// string     -> textos entre aspas
// boolean    -> true ou false
// null       -> valor propositalmente vazio
// undefined  -> variável declarada sem valor

// ----------------------------------------------
// Objetos e Arrays
// ----------------------------------------------
// Objetos usam {} e funcionam como "listas de propriedades"
// Arrays usam [] e funcionam como listas ordenadas
// ----------------------------------------------

// Criando um objeto chamado 'y'
var y = {
  letra: "Y",
  peso: "exemplo"
};

console.log(y); // Exibe o objeto completo

// Objetos também são mutáveis,
// então podemos alterar valores internos:
y.peso = "500"; // Mudando o valor da propriedade 'peso'

console.log(y); // Exibe: { letra: "Y", peso: "500" }

// array 
var numeros = [1,2,3,4]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[3])