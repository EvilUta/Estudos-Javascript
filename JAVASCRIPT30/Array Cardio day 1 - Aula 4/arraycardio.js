const cardioDay1 = [
  {
    name: "Jumping Jacks",        // Polichinelo
    duration: 45,                 // segundos
    rest: 15,
    icon: "🤸‍♂️",
  },
  {
    name: "Squat Jumps",          // Agachamento com salto
    duration: 40,
    rest: 20,
    icon: "🏋️‍♂️",
  },
  {
    name: "High Knees",           // Corrida estacionária com joelhos altos
    duration: 60,
    rest: 30,
    icon: "🏃‍♂️",
  },
  {
    name: "Burpees",              // Full body, explosivo!
    duration: 30,
    rest: 30,
    icon: "🔥",
  },
  {
    name: "Mountain Climbers",    // Core + cardio
    duration: 40,
    rest: 20,
    icon: "⛰️",
  },
  {
    name: "Shoulder Tap Plank",   // Prancha com toque nos ombros
    duration: 45,
    rest: 15,
    icon: "💪",
  },
  {
    name: "Lateral Shuffle",      // Corrida lateral
    duration: 40,
    rest: 20,
    icon: "🏃‍♀️",
  },
  {
    name: "Bicycle Crunch",       // Abdômen + coordenação
    duration: 45,
    rest: 15,
    icon: "🚴‍♂️",
  },
  {
    name: "Sprint in Place",      // Final com tudo
    duration: 30,
    rest: 0,
    icon: "⚡",
  },
];

// use map(), forEach() ou timers pra iterar no treino e exibir dinamicamente cada exercício

cardioDay1.forEach((exercise, index) => {
  console.log(
    `${index + 1}. ${exercise.icon} ${exercise.name} — ${exercise.duration}s (Descanso: ${exercise.rest}s)`
  );
});

// Array Filter
const idades = [12, 18, 22, 15, 30];

// filtra apenas maiores de idade
const maiores = idades.filter(idade => idade >= 18);

console.log(maiores); // [18, 22, 30]


// Array Map
const numeros = [1, 2, 3, 4];

// dobra cada número
const dobrados = numeros.map(num => num * 2);

console.log(dobrados); // [2, 4, 6, 8]

// Array ForEach
const frutas = ["🍎", "🍌", "🍇"];

frutas.forEach((fruta, i) => {
  console.log(`${i + 1}. ${fruta}`);
});
// 1. 🍎
// 2. 🍌
// 3. 🍇

// Array Reduce
const valores = [10, 20, 30];

// soma tudo
const total = valores.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(total); // 60

// Array Find
const produtos = [
  { nome: "camisa", preco: 50 },
  { nome: "tenis", preco: 200 },
  { nome: "meia", preco: 10 },
];

const caro = produtos.find(p => p.preco > 100);

console.log(caro); // { nome: "tenis", preco: 200 }

// Array some / every
const notas = [8, 7, 10, 9];

const temReprovado = notas.some(n => n < 6); // false
const todosAprovados = notas.every(n => n >= 7); // true

// Array Includes
const cores = ["vermelho", "azul", "verde"];

console.log(cores.includes("azul")); // true
console.log(cores.includes("rosa")); // false

