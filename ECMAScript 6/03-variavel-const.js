const secretNumber = 28; //valor constante
// secretNumber = 40 -> nao pode modificar 

// mas se voce fizer dessa forma

const Renan = {
    name: 'Renan',
    age: 21
}

console.log(Renan)

Renan.age = 38;
console.log(Renan)

// ou seja eu consegui mudar o valor do const 
// a variavel eu nao consigo declarar novamente mas a propriedade de dentro SIM

// So se vc congelassse  a variavel -> Object.freeze(Renan); -> ai ele nao mudaria 

