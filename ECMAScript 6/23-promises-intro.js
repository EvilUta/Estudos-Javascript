// objeto com uma acao q ainda nao foi finalizada mas no futuro vai ser realizada de alguma forma
// ainda nao fiz mas vou fazer e uma promessa 

var defer = new Promise((resolve, reject) => {
    if(true){
        resolve('Hello! its works!');
    } else {
        reject('Error!');
    }
});

defer 
    .then((data) => console.log(data)) // importante nao colocar ponto e virgula entre as separacoes pois do then e catch, pois ele vai interpretar cada linha diferentemente
    .catch((err) => console.log(err));

//cria uma variavel chamada defer com uma Nova promessa e dentro da promise tem 2 parametros -> Resolve e reject
// resolve -> metodo que vai resolver
// reject -> vai rejeitar alguma situacao
// Dentro da promise aonde ha resolve e reject tem uma arrow function q serao passado os metodos -> oq sera retornado ou nao
// dentro ha um if e um else -> if -> resolve / else -> reject
// o THEN e usado para FAZER entao se puxa a funcao e coloca o Then
// para se tratar de um ERRO se usa o CATCH
// DENTRO do promise vc consegue encadiar metodos
// a promise e interecante para trabalhar coisas asincronas

var teste = new Promise((resolve,reject)=> {
    setTimeout(()=>{
      if(true){
        resolve('Funcionouuuuu!');
    } else {
        reject('Erro!');
        }  
    },2000)
})

teste
    .then((certo)=> {console.log(certo) 
        return 'Top de linha'})
    .then((certo)=> console.log(certo))
    .catch((erro)=> console.log(erro));

// setTimeout usado para setar um tempo para uma ocasiao acontecer no js
// pode se ter then atras do outro
// ele chama o then e dentro do then ele coloca para retornar algo e chama dnv, assim consegue se chamar multiplas acoes com a acao encadeiada de uma
