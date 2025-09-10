const notas = [7.7 , 8.9 , 5.2 , 3.5 , 9.0 , 6,3 , 3.2]

// Sem callback
let notasBaixadas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixadas1.push(notas[i])
    }
}

console.log(notasBaixadas1)

// Com callback
notasBaixadas2 = notas.filter(function (nota){
    return nota < 7
}) 

console.log(notasBaixadas2)

const notasBaixadas3 = notas.filter(nota => nota < 7)
console.log(notasBaixadas2)