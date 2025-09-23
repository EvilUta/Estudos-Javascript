function gerarNumerosMega(qtde = 6, min = 1, max = 60) {
    return new Promise((resolve, reject) => {
        try {
            const numeros = new Set()
            while (numeros.size < qtde) {
                const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
                numeros.add(aleatorio)
            }
            resolve([...numeros].sort((a, b) => a - b))
        } catch (e) {
            reject(e)
        }
    })
}

gerarNumerosMega()
    .then(nums => console.log("Números da Mega-Sena:", nums))
    .catch(err => console.error("Erro:", err))
