/*
  Capture 10 items para compor a lista de um supermercado.
  Após capturar os 10 items,imprima-os,separando por vírgula.
*/

alert(`Vamos fazer uma lista de materiais de uma lasanha ?`)
const id = prompt(`Digite seu nome`)

alert(
  `Olá ${id} vamos começar a fazer a lista\nVocê irá digitar os materiais de uma Lasanha\n(já vou te adiantar que é só são 4)\nVocê digitará na seguinte sequencia:\n1- Massa\n2- Recheio\n3- Molho\n4- Adicionais`
)

let ingredients = []

for (let index = 0; index < 4; index++) {
  let ingredient = prompt(`${id} digite o ingrediente ${index + 1}`)

  ingredients[index] = ingredient
}

alert(`Ótimo ${id} você completou sua lista de ingredientes de uma lasanha e eles são\n1- Massa: ${ingredients[0]}\n2- Recheio: ${ingredients[1]}\n3- Molho: ${ingredients[2]}\n4- Adicionais: ${ingredients[3]}`)