
let a = 42;
let b = 23;
[a,b] = [b,a]; // troca o valores a recebe o valor de B e o B o valor de A -> tem q ; se nao n funciona

console.log('a:', a);
console.log('b:', b);

// Mesmo que muitas vezes você consiga escrever sem ;, nem sempre o JS “adivinha” corretamente onde termina uma linha.