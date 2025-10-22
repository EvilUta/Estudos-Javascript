var animal = 'cat';
// let animal = 'cat';  -> so pode ter 1 variavel com o nome

// mas se criar um bloco -> vc consegue usar normalmente

console.log(animal)
{
    let animal = 'dog';
    console.log(animal)
}
console.log(animal)

// ou seja dentro do bloco e completamente diferente do que esta fora