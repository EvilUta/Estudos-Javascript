// Parametros e Retornos são opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area >20) {
        console.log(`Valor acima do permitido: ${area}`)
    } else {
        return area 
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area(12 , 20))