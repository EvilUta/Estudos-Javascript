class lancamento {
    constructor(
        nome = "Generico" , 
        valor = 0) {
            this.nome = nome ,
            this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes  
        this.ano = ano
        this.lancamento = []
    }
    adicionarLancamento(...lancamento) {
        lancamento.forEach( l => this.lancamento.push(l))
    }
    sumario(){
        let valorConsolidado = 0  
        this.lancamento.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento( "Salário" , 450000 )
const contadeLuz = new lancamento ( "Luz" , -399 )

const contas = new cicloFinanceiro(6, 2018)
contas.adicionarLancamento(salario, contadeLuz)
console.log(contas.sumario())