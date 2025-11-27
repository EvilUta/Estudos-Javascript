// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(2 , 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(resultado)

// Declare uma nova variável, sem valor.
var semvalor = 0

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function comvalor(){
    semvalor = 1000
    return `O valor da variavel agora e ` + semvalor
}


// Invoque a função criada acima.
console.log(comvalor())


// Qual o retorno da função? (Use comentários de bloco).
console.log(semvalor)

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multi(a,b,c){
    if( a === undefined || b === undefined || c === undefined){ // se passa o valor em undefined 
        return 'Preencha todos os valores corretamente!'
    } else{
        return (a * b * c) + 2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multi(2,3))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multi(10,3,5))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 152

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentos(x,y,z){  // toda vez que for passar argumentos passe -> arguments.length q ele conta todos os argumentos da condicional
    if (arguments.length === 1){
        return x
    }
    else if (arguments.length === 2){
        return x + y
    }
    else if (arguments.length === 3){
        return (x + y) / z
    }
    else if (arguments.length === 0){
        return false
    }
    return null
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(argumentos(2)) // 2 
console.log(argumentos(2,5)) // 7
console.log(argumentos(2,10,5)) // 2.4
console.log(argumentos()) // false
console.log(argumentos("2","10","5")) // 42
console.log(argumentos(2,10,5,4)) // null

// arguments.length mostra quantos argumentos foram enviados para a função

// poderia ser feito dessa forma tambem sem o length 
function threeArgs (a, b, c) {
    // 1 argumento
    if (a !== undefined && b === undefined && c === undefined) { // && -> e
        return a;
    }

    // 2 argumentos
    else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    }

    // 3 argumentos
    else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    }

    // nenhum argumento
    else if (a === undefined && b === undefined && c === undefined) {
        return false;
    }

    // qualquer outro caso estranho
    else {
        return null
    }
}

console.log(threeArgs(1)) // 1
console.log(threeArgs(2,3)) // 5
console.log(threeArgs(100,40,5)) // 28
console.log(threeArgs()) // false
console.log(threeArgs(2,10,5,4)) // 2.4 -> o javascript n deixa retornar o null . teria q usar o lenght > 3 -> Null 

