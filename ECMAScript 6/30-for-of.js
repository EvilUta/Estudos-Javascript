var txt = 'Ireland'; // strings são iteráveis

// Criando um iterador a partir do iterável txt
var it = txt[Symbol.iterator]();

// console.log(it.next()); // { value: 'I', done: false }
// console.log(it.next()); // { value: 'r', done: false }
// console.log(it.next()); // { value: 'e', done: false }
// // ...
// console.log(it.next()); // { value: undefined, done: true } quando termina

// com o literable vc consegue usar o for e o OF

for (letter of txt) {
    console.log(letter);
    if (letter === 'a') break // no momento que chegar na letra A ele para
}


