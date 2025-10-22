function hello(name = 'Renan',surname = 'Gustavo'){ // forma nova
    // forma antiga
    // name = name || 'Renan'
    // surname = surname || 'Gustavo'
    console.log(`hello ${name} ${surname}! How are you?`)
}

hello()
hello('Roberto', 'Augusto') // se eu passar outros nomes vai continuar dando certo
hello('Alberto') //como so passei 1 parametro vai usar o outro que esta como default