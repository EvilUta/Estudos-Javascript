function* genNames(){ // para definir um generator tem que colocar um * depois da palavra FUNCTION -> function*
    yield 'Renan' // E usa a palavra YIELD no lugar do console.log -> como se fosse um return
    yield 'Kathleen' 
    yield 'Loki'
}

// o generator nao e tao utilizada 
// Um Generator é uma função especial que pode pausar sua execução e retomar depois, mantendo seu estado.

const names = genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());

// ele chama 1 vez e para