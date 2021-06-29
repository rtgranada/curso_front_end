const colaboradores = [
  { name: 'Juca', age: 25, office: 'front-end' },
  { name: 'Márcia', age: 23, office: 'back-end' },
  { name: 'Vitória', age: 28, office: 'designer' },
  { name: 'Fernando', age: 19, office: 'estagiário' },
  { name: 'Fabiane', age: 25, office: 'back-end' },
  { name: 'Jéssica', age: 23, office: 'front-end' },
]
//a
let names = colaboradores.map((data) => data.name)
console.log('names:', names)
//b
let job = colaboradores.filter((data) => data.office === 'front-end')
console.log('Front-End:', job)
//c
let first = colaboradores.find((data) => data.age > 23)
console.log('Primeiro:', first)
//d
let all = colaboradores.every((data) => data.age > 18)
all
  ? console.log('Todos são maiores de 18 anos')
  : console.log('Todos não são maiores de 18 anos')

// if (all) {
//   console.log('Condicional every:', colaboradores)
// }

//e
let front = colaboradores.some((data) => data.office === 'estagiário')
console.log('Algum estagiário?', front ? 'Sim' : 'Não')

//f
let somaIdade = colaboradores.reduce((acc, data) => acc + data.age, 0)
console.log('Soma da idade:', somaIdade)

//g
let order = colaboradores.sort((a, b) => a.age - b.age)
console.log('Ordenado Crescente', order)

let orderB = colaboradores.sort((a, b) => b.age - a.age)
console.log('Ordenado Decrescente', orderB)
