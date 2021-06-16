function checkSignal(data) {
  if (data < 0) {
    console.log('x ( ' + data + ' ) é negativo')
  } else {
    console.log('x ( ' + data + ' ) é positivo')
  }
}

checkSignal(-99)
checkSignal(42)

let duo2 = (data) => data * 2
console.log('Arrow function: ' + duo2(5))

let duo3 = (data) => {
  return data * 2
}
console.log('Arrow function2: ' + duo3(5))

function double(data) {
  return 2 * data
}
let duo = double(5)
console.log('Normal function: ' + duo)

function calculate(type, first, second) {
  switch (type) {
    case 'soma':
      return first + second
      break
    case 'subtrai':
      return first - second
      break
    case 'multiplica':
      return first * second
      break
    case 'divide':
      return first / second
      break
  }
}

let calc = calculate('soma', 3, 5)
console.log('Soma: ' + calc)
calc = calculate('subtrai', 3, 5)
console.log('Subtração: ' + calc)
calc = calculate('multiplica', 3, 5)
console.log('Multiplicação: ' + calc)
calc = calculate('divide', 3, 5)
console.log('Divisão: ' + calc)
