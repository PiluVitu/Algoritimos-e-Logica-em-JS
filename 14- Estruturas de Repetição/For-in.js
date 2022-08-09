// For...in
// Captura a propriedade de um objeto 

let person = {
  name: 'Paulo',
  age: 21,
  weight: 115,
  favoriteGame: 'Assassin`s Creed IV',
  platformPlayed: 'PC',
  sincePlayed: 2009
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}