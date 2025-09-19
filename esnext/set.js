// não aceita repetição/ não indexada
const times = new Set()
times.add("vasco")
times.add("flamengo")
times.add("botafogo")
times.add("sao-paulo").add("coringao")

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))
times.delete("coringao")
console.log(times.has("coringao"))
console.log(times)

const nomes = [ "raquel" , "lucao" , "rogerio", "laercio"]
const nomeSet = new Set(nomes)
console.log(nomeSet)