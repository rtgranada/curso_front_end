const colaboradores = [
  { name: 'Juca', age: 25, office: 'front-end' },
  { name: 'Márcia', age: 23, office: 'back-end' },
  { name: 'Vitória', age: 28, office: 'designer' },
  { name: 'Fernando', age: 19, office: 'estagiário' },
  { name: 'Maicon', age: 19, office: 'designer' },
  { name: 'Fabiane', age: 25, office: 'back-end' },
  { name: 'Jéssica', age: 23, office: 'front-end' },
]

//a
function exercicioA(data) {
  let allOffices = data.map((data) => data.office)
  const repeatedValues = Object.values(allOffices)

  let somaElementos = repeatedValues.reduce(function (object, item) {
    if (!object[item]) {
      object[item] = 1
    } else {
      object[item]++
    }
    return object
  }, {})
  return somaElementos
}

//b
function exercicioB(data) {
  let decrescente = data.sort((a, b) => b.age - a.age)
  return decrescente
}

const peso = {
  estagiário: 1,
  'front-end': 2,
  'back-end': 3,
  designer: 4,
}
//c
function exercicioC(data) {
  const sort = data.sort((a, b) => {
    if (peso[a.office] < peso[b.office]) {
      return -1
    }
    if (peso[a.office] > peso[b.office]) {
      return 1
    }
    return 0
  })
  return sort
}

//d
function exercicioD(data) {
  let order = data.sort((a, b) => {
    if (a.age < b.age) {
      return -1
    }
    if (a.age < b.age) {
      return 1
    }

    if (a.age === b.age) {
      exercicioC(data)
    }
  })

  return order
}
console.log('----------- A -----------')
console.log(exercicioA(colaboradores))

console.log('----------- B -----------')
console.log(exercicioB(colaboradores))

console.log('----------- C -----------')
console.log(exercicioC(colaboradores))

console.log('----------- D -----------')
console.log(exercicioD(colaboradores))

const installments = [
  { installment_number: 1, value: 123.45, status: 'Pago' },
  { installment_number: 2, value: 139.88, status: 'Pago' },
  { installment_number: 3, value: 123.45, status: 'Pago' },
  { installment_number: 4, value: 182.37, status: 'Aberto' },
  { installment_number: 5, value: 133.93, status: 'Aberto' },
]

function exercicio2A(data) {
  const sum = data.reduce((acc, elem) => {
    return acc + elem.value
  }, 0)

  return sum.toFixed(2)
}

function exercicio2B(data) {
  const payments = data.reduce(
    (acc, elem) => {
      if (elem.status === 'Pago') {
        acc.total_paid = acc.total_paid + elem.value
      } else {
        acc.total_open = acc.total_open + elem.value
      }
      return acc
    },
    {
      total_paid: 0,
      total_open: 0,
    }
  )
  return payments
}

function exercicio2C(data) {
  let decrescente = data.sort((a, b) => b.value - a.value)
  return decrescente
}

function exercicio2D(data) {
  let order = data.sort((a, b) => {
    if (a.value < b.value) {
      return -1
    }
    if (a.value < b.value) {
      return 1
    }

    if (a.value === b.value) {
      return a.installment_number > b.installment_number
        ? -1
        : a.installment_number < b.installment_number
        ? 1
        : 0
    }
  })

  return order
}

console.log('----------- 2A -----------')
console.log(exercicio2A(installments))

console.log('----------- 2B -----------')
console.log(exercicio2B(installments))

console.log('----------- 2C -----------')
console.log(exercicio2C(installments))

console.log('----------- 2D -----------')
console.log(exercicio2D(installments))
