//Manipulando Arrays

//Criar Array com construtor

function Person(name, age, favoriteGame) {
  this.name = name
  this.age = age
  this.favoriteGame = favoriteGame
}

function AddPearson() {
  let name = prompt('Digite o nome')
  let age = Number(prompt('Digite a Idade'))
  let favoriteGame = prompt('Digite o nome do jogo favorito')
  return new Person(name, age, favoriteGame)
}

//Resposta
let myArray = new Array(AddPearson())
console.log(myArray)