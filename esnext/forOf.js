for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntoEcma = ["Map", "Set", "Promise"] 
for (let i in assuntoEcma) {
    console.log(i) // índices: 0,1,2
}

for (let assunto of assuntoEcma) {
    console.log(assunto) // valores: Map, Set, Promise
}

const assuntoMap = new Map([
    [ "Map", {abordado: true} ],
    [ "Set", {abordado: true} ],
    [ "Promise", {abordado: false} ]
])

// Retorna arrays [chave, valor]
for (let assunto of assuntoMap) {
    console.log(assunto)
}

// Só as chaves
for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

// Só os valores (⚠️ precisa dos parênteses)
for (let valor of assuntoMap.values()) {
    console.log(valor)
}

// Chave e valor separados
for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}
