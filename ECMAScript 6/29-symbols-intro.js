// Symbol
// Ele serve para criar identificadores únicos — valores que nunca se repetem, mesmo que tenham o mesmo nome.

let foo = Symbol('name'); // define como symbol
let bar = Symbol('name')

console.log(foo);
console.log(foo===bar);  // por mais que eles sejam iguais, como e marcado como symbol cada um deles e unico

// vc consegue copiar objetos sem propriedades iguas

let obj = {
    [Symbol('name')]: 'Renan',
    [Symbol('age')]: 21,
    city: 'Tatui'
}

console.log(Object.keys(obj)) // so identifica o que nao esta marcado como symbol
const symbols = Object.getOwnPropertySymbols(obj) // apenas assim vc consegue identificar os symbols dentro do objeto
const data = symbols.map(sym => obj[sym])
console.log(data)

// o symbols serve para isso, uma propriedade unica -> ele e primitivo ainda 
