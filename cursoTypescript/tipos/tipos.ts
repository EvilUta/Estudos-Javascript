// string
let nome = 'João'
console.log(nome)
// nome = 28 -> esse valor é string então ele não funciona

// numbers
let idade = 27 
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ['cozinhar', 'praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)  

// tuplas
let endereco: [string, number] = ['Av Principal', 99]
console.log(endereco)

// endereco = ['Rua Importante', 1260, 'bloco C']

// Enums
enum Cor{
    Cinza,
    verde,
    Azul
}

let minhaCor: Cor = Cor.verde
console.log(minhaCor)