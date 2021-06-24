//Ex 1
console.log('----------EXERCICIO 1----------')
const arrow = (data) => data
console.log('Passando um argumento na Arrow Function:', arrow('Argumento'))
console.log('-------------------------------')
//Ex 2

console.log('----------EXERCICIO 2----------')
let arr = [1, 2, 3]
function soma(num1) {
  return num1 + num1
}

const executeOnArray = (function (array, func) {
  array.forEach((element) => {
    console.log('Somando', element, 'com', element, '=', func(element))
  })
})(arr, soma)
console.log('-------------------------------')

//Ex 3
console.log('----------EXERCICIO 3----------')
const calcs = {
  soma: (firstNum, secondNum) => firstNum + secondNum,
  subtrai: (firstNum, secondNum) => firstNum - secondNum,
  multiplica: (firstNum, secondNum) => firstNum * secondNum,
  divide: (firstNum, secondNum) => firstNum / secondNum,
}

let obj = Object.entries(calcs)
let num1 = 3
let num2 = 5
console.log('Números:', num1, 'e', num2)

function calculate(type) {
  return calcs[type]
}

obj.forEach((element) => {
  let type = element[0].charAt(0).toUpperCase() + element[0].slice(1)
  console.log(type, calculate(element[0])(num1, num2))
})

// console.log('Soma: ', calculate('soma')(3, 5))
// console.log('Subtração: ', calculate('subtrai')(3, 5))
// console.log('Multiplicação: ', calculate('multiplica')(5, -8))
// console.log('Divisão: ', calculate('divide')(3, 5))
console.log('-------------------------------')
