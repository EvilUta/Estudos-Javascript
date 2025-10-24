const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5,
};

// O método Object.values(obj) retorna um array contendo apenas os valores
// da propriedades enumeráveis do objeto.

console.log(Object.values(animals));

// total de animals 

console.log(Object.values(animals).reduce((a,b) => a + b));

// Object.values(animals) → pega os valores do objeto ([4, 2, 3]);
// .reduce((a, b) => a + b) → soma todos os números do array;
// console.log(...) → exibe o resultado final (9) no console.

