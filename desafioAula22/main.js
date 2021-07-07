import data from './data.json'
import { formated } from './formatters.js'

const dados = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (!data) {
        rej('Não há dados')
      }
      res(data)
    }, 2000)
  })

const exex = async () => {
  try {
    const resp = await dados()
    formated(resp)
  } catch (error) {
    console.log('catch:', error)
  }
}

exex()

//ordenar por data e o total em compras
