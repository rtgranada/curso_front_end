const user = {
  nome: 'Usuário',
  idade: 25,
  endereco: {
    rua: 'Rua Central',
    numero: 1,
  },
  projetos: ['Projeto 1', 'Projeto 2'],
}
const {
  nome,
  endereco: { rua },
  projetos,
} = user
let [, second] = projetos
console.log('---------- Ex 1 ----------')
console.log(nome)
console.log(rua)
console.log(projetos)
console.log(second)
console.log('---------- Ex 2 ----------')
const students = [
  { id: 1, name: 'John Doe', age: 23, scholarship: false },
  { id: 1, name: 'Margoe', age: 19, scholarship: true },
  { id: 1, name: 'Kayle', age: 22, scholarship: true },
]

const [primeiro, { name }, terceiro] = students

console.log(primeiro)
console.log(name)
console.log(terceiro)
console.log('---------- Ex 3 ----------')
const func = (...rest) => {
  console.log(rest)
}

func(1, 2, 3, 4)

console.log('---------- Ex 4 ----------')
const func2 = ({ name }) => {
  console.log(name)
}

func2(primeiro)
console.log('---------- Ex 5 ----------')
const func3 = (obj1, obj2) => {
  let objetoF = { ...obj1, ...obj2 }
  console.log(objetoF)
}

objeto1 = { nome: 'Rodrigo', idade: 31 }
objeto2 = { profissao: 'Desenvolvedor', area: 'Front' }

func3(objeto1, objeto2)
console.log('---------- Ex 6 ----------')
const func4 = (arr1, arr2) => {
  let arrayF = [...arr1, ...arr2]
  console.log(arrayF)
}

array1 = [1, 2, 3]
array2 = [3, 4, 5]

func4(array1, array2)
