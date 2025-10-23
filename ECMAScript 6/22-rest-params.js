function multiply(mult, ...args) { // passa o spread + argumentos assim e entedivel q tem mais de 2 argumentos
    return args.map(arg => arg * mult);
}

console.log(multiply(10,3,4,5,13)); // pode se adicionar infinitamente

// quando for fazer uma conta dentro da funcao usar map

function somar(soma, ...numeros) {
    return numeros.map(numero => numero + soma);
}

console.log(somar(30,20))

// ele faz uma funcao somar, usa o parametro soma, o spread ... e numeros(que sao os argumentos) retorna os numeros.map(para pode fazer arrow function)
// ai prossegue a arrow function numero => numero + o soma que e o parametro principal

function subtrair(subtrair, ...numeros) {
    return numeros.map(numero => numero - subtrair);
}

console.log(subtrair(40,20))

// e na hora do console log coloca a funcao e os parametros da conta

function conta(subtrair1, somar1, multiply1 , ...numeros) {
    const soma = numeros.map(n => n + somar1);             // criar uma constante e usar os parametros da conta e retornar a contante
    const subtracao = numeros.map(n => n - subtrair1);
    const multiplicacao = numeros.map(n => n * multiply1);
    return { soma, subtracao, multiplicacao };
}

console.log(conta(10, 5, 2, 1, 2, 3));


