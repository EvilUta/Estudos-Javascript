function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        // Se for número, formata; se não, deixa como está
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    // Última parte do template
    resultado.push(partes[partes.length - 1])
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)
