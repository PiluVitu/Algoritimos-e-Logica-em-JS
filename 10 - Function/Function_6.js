/*
  Function() constructor

  * Expressão New
  * Criar um novo objeto 
  * This Keyword
*/

function Person(name, age, favoriteFood, sex, weight, height) {
  this.name = name
  this.age = age
  this.favoriteFood = favoriteFood
  this.sex = sex
  this.weight = weight
  this.height = height

  const converterHeight = (this.height / 100).toFixed(2)

  const resume =`Meu nome é ${name} tenho ${age} anos, ${converterHeight}m de altura, peso ${weight}Kg, sou ${sex} e minha comida favorita é ${favoriteFood}.`
  return console.log(resume)
}

const paulo = new Person('Paulo Victor', 21, 'Paçoca', 'Homem', 115, 179)

