const a = 3;
const b = 7;
const operacao = "*";

const resultado = operacao;
console.log(resultado);
console.log(
  operacao === "+" ? a + b :
  operacao === "-" ? a - b :
  operacao === "*" ? a * b :
  operacao === "/" ? a / b :
  "Operação inválida"
);
