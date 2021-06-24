const myUser = {
  name: 'Rodrigo Granada',
  age: 31,
  email: 'rtgranada@gmail.com',
}
console.log(myUser)

let strings = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto']
console.log('Terceiro elemento: ' + strings[2])

const dev = {
  name: 'Juca',
  projects: [
    {
      name: 'Projeto 1',
      start: '01/02/2021',
    },
    {
      name: 'Projeto 2',
      start: '03/03/2021',
    },
  ],
}
console.log(dev.name)
console.log(dev.projects[1])

let numbers = [1, -22, 3, 4, -5]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 10)
}
