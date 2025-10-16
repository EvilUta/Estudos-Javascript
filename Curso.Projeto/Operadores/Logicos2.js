let t1 = true;
let t2 = true;

console.log('Vamos comprar a TV 50', t1 && t2);
console.log('Vamos comprar a TV 32', t1 !== t2);

let sorvete = t1 || t2;
console.log('Vamos comprar sorvete?', sorvete);

let ficaremcasa = !sorvete;
console.log("Vamos ficar em casa?", ficaremcasa);  