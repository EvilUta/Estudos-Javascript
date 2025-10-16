let botãoAzul = false;

if (botãoAzul) {
    console.log("Botão Azul está ativo");
} else {
    console.log("Botão Azul está inativo");
}

/* outro exemplo */

let temdinheiro = true;
let estaensolarado = false;
let carroestanagaragem = true;

let resultadoE = 'vai pro shopping? ';
resultadoE += temdinheiro && estaensolarado;
console.log(resultadoE); 

let resultadoOu = 'vai pro shopping? ';
resultadoOu += estaensolarado || carroestanagaragem;
console.log(resultadoOu);
