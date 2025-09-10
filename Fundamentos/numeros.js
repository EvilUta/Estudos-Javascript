const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliçao1 = 9.87;
const avalicao2 = 8.90;

const total = avalicao2 * peso1 + avalicao2 * peso2;
const media = total / (peso1 + peso2);

console.log("A média é: " + media);