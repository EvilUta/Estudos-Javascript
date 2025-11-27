// ----------------------
//     Operadores
// ----------------------

// Declarando duas variáveis numéricas
var a = 20
var b = 12

// Operações matemáticas básicas (aritméticas)
console.log(a + b)  // Soma → 20 + 12 = 32
console.log(a * b)  // Multiplicação → 20 * 12 = 240
console.log(a / b)  // Divisão → 20 / 12 = 1.666...
console.log(a - b)  // Subtração → 20 - 12 = 8


// ----------------------------
//  Operadores abreviados: ++ e --
// ----------------------------

// "soma" começa valendo 20
var soma = 10 + 10   // soma = 20

// ++soma → pré-incremento
// Primeiro soma 1, depois exibe o valor
console.log(++soma)  // Agora soma vale 21

// --soma → pré-decremento
// Primeiro subtrai 1, depois exibe
console.log(--soma)  // Agora soma vale 20

// soma++ → pós-incremento
// Primeiro exibe, depois soma 1
console.log(soma++)  // Exibe 20, depois soma vira 21

// soma-- → pós-decremento
// Primeiro exibe, depois diminui 1
console.log(soma--)  // Exibe 21, depois soma vira 20

//+= , -= , *= , /=

// -------------------------------
// Operadores de Atribuição Abreviados
// -------------------------------

var x = 10  // valor inicial

// x += 5  →  Soma e atribui
x += 5
console.log(x) // 10 + 5 = 15

// x -= 3  →  Subtrai e atribui
x -= 3
console.log(x) // 15 - 3 = 12

// x *= 2  →  Multiplica e atribui
x *= 2
console.log(x) // 12 * 2 = 24

// x /= 4  →  Divide e atribui
x /= 4
console.log(x) // 24 / 4 = 6
