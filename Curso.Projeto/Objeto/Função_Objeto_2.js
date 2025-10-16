// Função Construtora (Classe) -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    // Validações simples
    if (mes < 1 || mes > 12) {
        throw new Error("Mês inválido. Deve estar entre 1 e 12.");
    }

    if (dia < 1 || dia > 31) {
        throw new Error("Dia inválido. Deve estar entre 1 e 31.");
    }

    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

// Criando objetos do tipo Data
const d1 = new Data();                  // usa valores padrão: 1/1/2021
const d2 = new Data(12, 10, 2012);      // mês corrigido para outubro (10)
const d3 = new Data(9, 12, 2013);       // dezembro

// Exibindo datas formatadas
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

// Exibindo objetos completos
console.log(d1);
console.log(d2);
console.log(d3);

