// O Proxy é um objeto especial que “intercepta” e controla o comportamento de outro objeto.
// acessar propriedades (get)
// definir valores (set)
// deletar propriedades (deleteProperty)
// verificar se algo existe (has)
// é um “intermediário” entre o código e o objeto real

let obj = {
    name: 'Renan',
    age: 21
};

let proxy = new Proxy((obj),{
    get(target, name){ // get e o metodo que vamos usar, tem quer ter um target(alvo) e a propriedade alvo, no caso name
       console.log('Alguem esta pedindo o nome') 
       return target[name]; // pede para retorna o alvo do objeto nome
    },
    set(target, name, value){ // set e usado para definir valores
        console.log('Alguem esta mudando o nome');
        target[name] = value; // atribui ao alvo o valor
    }
}) // sintaxe basica do proxy -> tem q estar em letra maiuscula -> tem um Obj dentro de um handler

proxy.name
proxy.name = 'Jonas'
proxy.name
