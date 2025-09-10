function criarProduto(nome, preco) {
    return { nome, preco };
}

function aplicarDesconto(produto, desconto) {
    return produto.preco * (1 - desconto);
}

const notebook = criarProduto("Notebook", 3999);

console.log("Preço normal(notebook):", notebook.preco);
console.log("Com 2% de desconto:", aplicarDesconto(notebook, 0.02));
console.log("Com 10% de desconto:", aplicarDesconto(notebook, 0.10));
console.log("Com 50% de desconto:", aplicarDesconto(notebook, 0.50));


const Celular = criarProduto("Celular", 1500);

console.log("Preço normal(celular):", Celular.preco);
console.log("Com 15% de desconto:", aplicarDesconto(Celular, 0.15));

const computadorGamer = criarProduto("Computador Gamer", 8500);

console.log("Preço normal(Computador Gamer)", computadorGamer.preco);
console.log("Com 25% de desconto:", aplicarDesconto(computadorGamer, 0.25));
