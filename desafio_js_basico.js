const array = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Márcia', idade: 23, cargo: 'back-end' },
  { nome: 'Victória', idade: 28, cargo: 'designer' },
  { nome: 'João', idade: 15, cargo: 'front-end' },
  { nome: 'Rafael', idade: 33, cargo: 'designer' },
  { nome: 'Samuel', idade: 20, cargo: 'back-end' },
  { nome: 'Jaqueline', idade: 38, cargo: 'designer' },
]

let aux
let k

function orderUsers(data) {
  for (let i = 0; i < data.length; i++) {
    if (i < data.length - 1) k = i + 1
    for (let j = 0; j < data.length; j++) {
      if (data[j].idade > data[k].idade) {
        aux = data[j]
        data[j] = data[k]
        data[k] = aux
      }
    }
  }
  return data
}

console.log(orderUsers(array))

// Usando sort

// function orderUsers(data) {
//   let order = data.sort(function (a, b) {
//     return a.idade - b.idade
//   })
//   console.log(order)
// }

// orderUsers(array)
