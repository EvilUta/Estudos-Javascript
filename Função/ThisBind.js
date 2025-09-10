const pessoa = {
    saudacao: "bom dia",
    falar() {
       console.log(this.saudacao);  
    }
}

pessoa.falar();

const falar = pessoa.falar
falar() // conflito entre padaigmas: funcional e 00 

const falarDePessoa = pessoa.falar.bind(pessoa) //sempre this será a const pessoa
falarDePessoa()

//bind amarrará algo para ser sempre o objeto principal 
//this chama a constante/var/let

const falar2 = pessoa.falar
falar2()

