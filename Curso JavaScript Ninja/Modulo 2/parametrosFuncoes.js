// =========================================
// 1. FUNÇÃO NORMAL SEM PARÂMETROS
// =========================================
function f1() {
    console.log("Sem parâmetros");
}
f1();


// =========================================
// 2. FUNÇÃO NORMAL COM 1 PARÂMETRO QUALQUER
// =========================================
function f2(arg) {
    // Apenas retorna o valor recebido
    return arg;
}
console.log(f2("Recebi isso"));


// =========================================
// 3. FUNÇÃO COM VÁRIOS PARÂMETROS
// =========================================
function f3(a, b, c) {
    // Somando todos os parâmetros
    return a + b + c;
}
console.log(f3(1, 2, 3));


// =========================================
// 4. PARÂMETROS COM VALOR PADRÃO
// =========================================
function f4(nome = "Visitante", idade = 0) {
    return `Nome: ${nome}, Idade: ${idade}`;
}
console.log(f4());                   // usa valores padrão
console.log(f4("Renan", 21));        // usa valores enviados


// =========================================
// 5. FUNÇÃO RECEBENDO UM ARRAY
// =========================================
function f5(arr) {
    // Retorna o segundo elemento
    return arr[1];
}
console.log(f5([10, 20, 30]));


// =========================================
// 6. FUNÇÃO RECEBENDO OBJETO
// =========================================
function f6(obj) {
    // Acessando propriedades do objeto
    return `Nome: ${obj.nome}, Peso: ${obj.peso}`;
}
console.log(
    f6({ nome: "Renan", peso: 63 })
);


// =========================================
// 7. DESESTRUTURAÇÃO DE OBJETO NOS PARÂMETROS
// =========================================
function f7({ nome, altura }) {
    // Já pega somente as propriedades que queremos
    return `${nome} mede ${altura}m`;
}
console.log(
    f7({ nome: "Renan", altura: 1.62 })
);


// =========================================
// 8. DESESTRUTURAÇÃO DE ARRAY NOS PARÂMETROS
// =========================================
function f8([a, b]) {
    // Recebe o array já quebrado em variáveis
    return `Primeiro: ${a}, Segundo: ${b}`;
}
console.log(f8([100, 200]));


// =========================================
// 9. REST PARAMETERS (...args)
//    Aceita infinitos argumentos
// =========================================
function f9(...nums) {
    // nums vira um array com todos os números enviados
    return nums.reduce((total, n) => total + n, 0);
}
console.log(f9(1, 2, 3, 4, 5));


// =========================================
// 10. FUNÇÃO ANÔNIMA EM VARIÁVEL
// =========================================
const f10 = function(obj) {
    return obj;
};
console.log(f10({ teste: true }));


// =========================================
// 11. ARROW FUNCTION (1 PARÂMETRO)
// =========================================
const f11 = x => x * 2;
console.log(f11(20));


// =========================================
// 12. ARROW FUNCTION (VÁRIOS PARÂMETROS)
// =========================================
const f12 = (a, b) => a + b;
console.log(f12(10, 30));


// =========================================
// 13. ARROW FUNCTION COM REST (...args)
// =========================================
const f13 = (...valores) => valores.join(" - ");
console.log(f13("A", "B", "C", "D"));


// =========================================
// 14. FUNÇÃO RECEBENDO OUTRA FUNÇÃO (CALLBACK)
// =========================================
function f14(callback) {
    // Executa a função passada como argumento
    callback("Executando callback...");
}

f14(msg => console.log(msg));


// =========================================
// 15. FUNÇÃO QUE RETORNA OUTRA FUNÇÃO
//    (isso é chamado de CLOSURE)
// =========================================
function criarMultiplicador(x) {
    // x fica "guardado" aqui (closure)
    return function(n) {
        return x * n;
    };
}

const duplicar = criarMultiplicador(2);
console.log(duplicar(5));   // 10


// =========================================
// 16. FUNÇÃO QUE RECEBE OBJETO COMPLEXO
// =========================================
function f16(pessoa) {
    return `
        Nome: ${pessoa.nome}
        Idade: ${pessoa.idade}
        Endereço: ${pessoa.endereco.rua}, nº ${pessoa.endereco.numero}
    `;
}

console.log(
    f16({
        nome: "Renan",
        idade: 21,
        endereco: {
            rua: "Rua Tal",
            numero: 123
        }
    })
);


// =========================================
// 17. FUNÇÃO COM PARÂMETRO OPCIONAL (checando)
// =========================================
function f17(a, b) {
    if (b === undefined) {
        return "Só veio um parâmetro";
    }
    return a + b;
}
console.log(f17(10));
console.log(f17(10, 20));


// =========================================
// 18. FORMA ANTIGA → arguments
//    (não recomendado hoje, mas precisa saber)
// =========================================
function f18() {
    // arguments é parecido com um array
    return arguments[0] + " | " + arguments[1];
}
console.log(f18("Primeiro", "Segundo"));


// =========================================
// 19. FUNÇÃO CONSTRUTORA (usa this)
// =========================================
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const p = new Pessoa("Renan", 21);
console.log(p);

