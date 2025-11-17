// ---------- ARRAYS ----------

const players = ["Renan", "João", "Pedro", "Luiza"];

console.log("Original players:", players);

// ❌ ERRADO: isto copia por referência
const team = players;

team[0] = "🔥 MODIFICADO";
console.log("team:", team);
console.log("players também mudou:", players);

// ✔️ CERTO: COPIANDO ARRAY

// Slice()
const team2 = players.slice();
team2[1] = "⚡ Slice Copy";
console.log("team2:", team2);
console.log("players intacto:", players);

// Concat()
const team3 = [].concat(players);
team3[2] = "✨ Concat Copy";

// Spread (...)
const team4 = [...players];
team4[3] = "💥 Spread Copy";

// Array.from()
const team5 = Array.from(players);
team5[0] = "🧊 Array.from Copy";

console.log("\nCÓPIAS DO ARRAY:");
console.table({ team2, team3, team4, team5 });


// ---------- OBJECTS ----------

const person = {
  name: "Renan",
  age: 20
};

console.log("\nOriginal person:", person);

// ❌ ERRADO: referência
const personRef = person;
personRef.age = 999;
console.log("person mudado sem querer:", person);

// ✔️ CERTO: COPIAR OBJETO (Shallow Copy)

// Object.assign()
const person2 = Object.assign({}, person, { age: 22 });
console.log("\nperson2 (assign):", person2);

// Spread (...)
const person3 = { ...person, name: "Carlos" };
console.log("person3 (spread):", person3);


// ---------- CUIDADO: CÓPIA RASA (SHALLOW COPY) ----------

const deep = {
  name: "Renan",
  social: {
    github: "@eviluta",
    instagram: "@renan"
  }
};

// ❌ errado: referência interna
const deepCopyFail = { ...deep };
deepCopyFail.social.instagram = "@MUDOU";
console.log("\nShallow Copy atinge o original:");
console.log("deep:", deep);
console.log("deepCopyFail:", deepCopyFail);

// ✔️ CÓPIA PROFUNDA (DEEP COPY)
// Método simples para a aula: JSON.parse(JSON.stringify(obj))

const deepCopyOK = JSON.parse(JSON.stringify(deep));
deepCopyOK.social.instagram = "@safe_copy";

console.log("\nCópia profunda funcionando:");
console.log("deep original:", deep);
console.log("deepCopyOK:", deepCopyOK);
