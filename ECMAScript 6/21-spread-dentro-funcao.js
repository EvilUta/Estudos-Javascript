function makeSandwich(bread, cheese , sauce) {
    console.log(`You sandwich with ${bread}, ${cheese} and ${sauce} its done!`)
}

const igredient = ['white', 'cheddar', 'barbecue']

makeSandwich(...igredient)

// entao voce pode criar uma funcao e declarar as variaveis a seguir e usar os spread quando for chamar a funcao com a variavel criada
