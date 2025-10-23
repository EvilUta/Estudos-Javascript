// assim como no objeto tem como fazer destructuring dentro de um array
const arr = ['Renan' , 'Gustavo' , 21 , 'Tatui']

const [ firstname, surname , age , city ] = arr // como e dentro de um array e nao de um objeto a estrura e com '[]'
console.log(arr)

// const [ tell = '9090'] = arr
// console.log(tell)
// isso nao funciona pois nao da para adicionar valores num array com destructuring
