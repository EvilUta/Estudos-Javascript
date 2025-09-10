// JSON não tem função 
// interoperabilidade de sistema (nada especifico de uma unica tecnologia)
// formato generico - textual -> comunicar sistemas em tecnologias completamentes diferentes

const obj = { 
    a: 1 , 
    b: 2 , 
    c: 3 , 
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) // São Dados

// console.log(JSON.parse("{ a:1 , b:2 , c:3 }")) -> não funciona

// console.log(JSON.parse({"a":1,"b":2,"c":3})) -> não funciona

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // formato valido -> objeto gerado a partir de um texto (json)

console.log(JSON.parse('{"a":1, "b": "String", "c": true , "d": {}, "e":[]}')) // pode se colocar string, boolean, array e etc -> aspas ' não funciona dentro do texto tem que ser duplas ""

