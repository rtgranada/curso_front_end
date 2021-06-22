//Ex.1
const user = {
  name: 'Marília',
  age: 26,
  job: 'Dev',
}
//Ex.2
const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

const objs = Object.entries(user)
objs.forEach((element) => {
  console.log(`o valor da propriedade ${element[0]} é ${element[1]}`)
})

let retorno = []
users.forEach((element) => {
  retorno.push(
    element.job === 'Dev'
      ? `${element.name} é dev`
      : `${element.name} não é dev`
  )
})
console.log(retorno.join('. '))
