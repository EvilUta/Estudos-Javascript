const notas = [7,8,3,5,10,9,8,8];
//foreach -> percorra cada um dos elementos

for(let nota of notas) {
    console.log(nota);
}

let indices = "";

for(let indice in notas) {
    indices += indice = '';
}

console.log(indices);