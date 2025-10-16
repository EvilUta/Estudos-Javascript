const cliente  = {
    codigo: 21323,
    nome: "Ana",
    endereco: {
        logradouro: "Rua Abc",
        numero: 123,
        complemento: "Apto 101, bloco B",
        pontosRef: [
            "Hospital",
            "Shopping",
        ]
    },
    nomeFilhos: ["Bia" , "Carlos"]
}

console.log(cliente["Endereco"]["Logradouro"]);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
