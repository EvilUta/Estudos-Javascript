let front = ['react', 'vue' , 'angular'];
let back = ['phyton' , 'ruby' , 'nodejs'];

// spread operator -> serve pra elementos que sao literaveis e desmembrar ele em pequenas partes
/// ... -> sao esses 3 pontinhos

console.log([...'renan']);
console.log(...front); // repare se nao colocasse os ... iria imprimir como se fosse um simples array

// para juntar os dois arrays
 let fullstack = [...front,back];
 console.log(fullstack);

 // para adicionar algo no meio desses arrays basta 

 // para juntar os dois arrays
 let fullstack2 = [...front, 'RxJs' ,...back];
 console.log(fullstack2);

 let lou = ['prato', 'garfo' , 'faca'];
 let comida = ['arroz', 'feijao', 'carne'];

 let almoco = [...lou,comida];
 console.log(almoco);

 let almoco2 = [...lou, 'Suco' , ...comida]
 console.log(almoco2);

  let almoco3 = [...lou, 'Suco' , comida]
 console.log(almoco3);

 // os ... pode formar subarray dentro do array