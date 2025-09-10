// Par nome/valor
const saudacao = "Ops" // contexto léxico 1

function exec() {
    const saudacao = "Aoba" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados em pares nome/valor
const cliente = {
    nome: "Renan",
    idade: 21,
    peso: 61,
    endereco: {
        logradouro: "Rua Santo Urso",
        numero: "226"
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
