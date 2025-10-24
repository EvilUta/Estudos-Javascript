// Ele armazena valores na memoria
// Nao pode ser usado com size
// nao pode ser usado com spread ...
// nao pode ser usado com for
// weakset armazena apenas objeto
// serve para rastrear objetos temporarios

let pessoa1 = { nome: "Renan" , age: 21 };
let pessoa2 = { nome: "Jonas" , age: 33 };

let weak = new WeakSet([obj1, obj2]); // cria um weakset

// weak.add(pessoa1);
// weak.add(pessoa2);

// console.log(weak.has(pessoa1)); // true

// pessoa1 = null; // objeto não tem mais referência fora do WeakSet

// Aqui o objeto { nome: "Renan" } pode ser coletado pelo Garbage Collector
// (não há como "ver" isso acontecer, mas ele será removido da memória)

