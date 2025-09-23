function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [min, max] = [max, min]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1200),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1300),
        gerarNumerosEntre(1, 60, 1600)
    ])
}

console.time("promise")
gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd("promise"))
