const num = 0

function checkZero(data) {
  let verifica =
    String(data).includes(0) &&
    String(data).length == 1 &&
    Number.isInteger(data)
  return (
    (verifica && `x é zero`.replace('x', data)) ||
    `x não é zero`.replace('x', data)
  )
}

console.log(checkZero(num))
