const numeros = [1,2,3,4,5];

numeros.push(6);
numeros[0] = 100;
numeros.concat(7,8,9); // concateniza
numeros.includes(6); // diz quando esta incluzo
numeros.indexOf(4); // vai determinar o index do elemento 


console.log(numeros.join(',')); // junta todos os elementos do array determinando o componente

console.log(numeros);
