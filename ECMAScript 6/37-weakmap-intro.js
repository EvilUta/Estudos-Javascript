// Ele é muito usado “por baixo dos panos” em frameworks
// (como React, Vue, etc.) pra guardar dados privados de objetos.
// As chaves só podem ser objetos (não números, strings ou booleans).
// As referências são “fracas”, ou seja, se o objeto-chave for apagado da memória
// o par é automaticamente removido do WeakMap pelo Garbage Collector.
// let weak = new WeakMap();

let obj1 = { nome: "Renan" , age: 21 };
let obj2 = { nome: "Kathleen" , age: 20 };

let wm = new WeakMap()
wm.set(obj1,'info1') // primeiro ele recebe um objeto e depois um valor ''
wm.set(obj2,'info2')

console.log(wm.nome) // vai dar undefined pq weakmap nao guarda valores no objeto