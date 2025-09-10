//Closure é o escopo criado quando uma função é declada
//Esse escopo permite a funcão acessar e manipular variavéis externas à função

// Contexto léxico em ação!

const x = "Global"

function fora () {
    const x = "Local"
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
