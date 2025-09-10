const imprimirResultado = function(nota) {
    if(nota >= 7) {
    return "Aprovado"
    } else {
    return "Reprovado"
    }
}

console.log ("Aluno1: " , imprimirResultado(10))
console.log ("Aluno2: " , imprimirResultado(5))
console.log ("Aluno3: " , imprimirResultado(8))
console.log ("Aluno4: " , imprimirResultado(2))