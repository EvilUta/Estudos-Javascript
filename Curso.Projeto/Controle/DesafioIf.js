const nota = 3;
let conceito;

if (nota >= 9 && nota <= 10) {
  conceito = 'A';
} if (nota >= 7 && nota <= 8.9) {
  conceito = 'B';
} if (nota >= 4.5 && nota <= 6.9) {
  conceito = 'C';
} if (nota < 4.5) {
  conceito = 'D';
}

console.log("Nota:", nota);
console.log("Conceito:", conceito);
