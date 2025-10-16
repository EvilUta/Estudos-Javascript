// 1 função com parametro e com retorno -> Melhor
function soma(a,b) {
    return a + b;
}

let resultado = soma(30, 56);
console.log(resultado);
console.log(soma(30,56));

// 2 função com parametro e sem retorno
function exibirMultiplicacao (a,b) {
    console.log( a * b);
}

// 3 função sem parametro com retorno
function retornaDataAtual() {
    return new Date();
}

console.log(retornaDataAtual());

// 4 função sem parametro e sem retorno
function exibirHora () {
    console.log(new Date().getHours());
}

exibirHora();
