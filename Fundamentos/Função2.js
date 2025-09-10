// Amarzenando um função em uma variável
const imprimirSoma = function (a,b) {
    console.log(a+b);
}

imprimirSoma(32, 54);

// Amarzenando uma função com arrow em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(32,52));

//Retorno implícito
const subtracao = (a,b) => a - b 

console.log(subtracao(3232, 233));