export function soma(value) {
  let result = value.reduce((acc, data) => acc + data.total, 0)
  console.log('Total do cliente: R$', result.toFixed(2))
}
