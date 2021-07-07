import { soma } from './math.js'
import { format } from 'date-fns'

function formatDate(date) {
  let dataString = date.split('/')
  let data = new Date(dataString[2], dataString[1] - 1, dataString[0])
  return data
}

export function formated(value) {
  value.clients.forEach((element) => {
    console.log(`Cliente: ${element.id} - ${element.name}`)
    let pur = value.purchases.filter((data) => data.client_id === element.id)
    let order = pur.sort((a, b) => {
      if (formatDate(a.data) < formatDate(b.data)) {
        return -1
      }
      if (formatDate(a.data) > formatDate(b.data)) {
        return 1
      } else {
        return a.total < b.total ? -1 : a.total > b.total ? 1 : 0
      }
    })
    order.forEach((ordened) => {
      console.log(
        `Compra em ${format(
          formatDate(ordened.data),
          'dd/MM/yyyy'
        )} no total de R$ ${ordened.total.toFixed(2)}`
      )
    })
    soma(pur)
  })
}
