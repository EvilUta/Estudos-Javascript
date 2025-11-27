// ------------------------------------------
// Função sem retorno
// ------------------------------------------

var x = 1; // variável global

function soma() {
    // Como não há "var", "let" ou "const",
    // essa função altera diretamente o valor de x (variável global)
    x = x + 1;
    // A função NÃO tem return, então retorna "undefined"
}

console.log(soma())  // Chama a função → altera x, mas imprime "undefined"
console.log(x)       // Agora x vale 2 (1 + 1)


// ------------------------------------------
// Função com retorno (return)
// ------------------------------------------

function qualquer() {
    var nome = 'Renan'  // variável local, só existe dentro da função
    return nome          // retorna o valor da variável
}

console.log(qualquer())  // imprime "Renan"


function somanumero(x,y){
    return x + y
}

console.log(30+20)