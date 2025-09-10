//Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a+b);
} // da a função, e depois abaixo chama ela e da os valores 


imprimirSoma(10,20);
imprimirSoma(200000000000000000,4209302903103123)

//Função com retorno
function soma (a, b = 0) {
    return a + b // retorna valor da soma
}

console.log(soma(30,40));