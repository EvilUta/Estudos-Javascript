// Operador ... rest(juntar)/spread(espalhar)
// Usar o rest com parâmetro de função

// Usar spread com objeto
const funcionario = {nome: "Maria", salario: 1800}
const clone = {ativo: true , ...funcionario}
console.log(clone)

// Usar spread com array
const grupoA = ["João","Pedro","Carla"]
const grupoFinal = ["Maria", "Rafaela", ...grupoA]
console.log(grupoFinal)