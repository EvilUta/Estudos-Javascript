var data = {
    firstname: 'Renan',
    surname: 'Gustavo',
    age: '21',
    blog: 'https//renangustavo.com.br',
    social: {
        twitter: 'Renan_lemes',
        facebook: 'Renan_lemes2',
    }
};

// maneirada facilitada de conseguir imprimir as variaveis

const {firstname , surname} = data // sintaxe e com {} -> cria um const com {} e especifica o que voce quer q seja tirado = variavel do objeto 
console.log(firstname)
console.log(surname)

const {age , blog} = data
console.log(`${firstname} tem ${age} e seu blog pessoal e ${blog}`)

const {twitter, facebook} = data.social // .social pois e o objeto referencia de dentro da var data 
console.log(facebook)
console.log(twitter)

//mudar o nome do valor da variavel

const { facebook: fb} = data.social // ou seja muda o valor para fb
console.log(fb)

// chamar valor que nao tem dentro do objeto

const {city = 'tatui'} = data // deve ser colocado com '=' e entre '' desa forma da certo!
console.log(city)

const {tell = '9090'} = data
console.log(tell)

// destructuring serve para destruturar de fato o objeto para facilitar chamar o que e desejado ou colocar algo que nao ha

// react e mto similar tb ex:
// import {react} form 'react'