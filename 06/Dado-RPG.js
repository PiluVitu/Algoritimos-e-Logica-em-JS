//Gerador de numero randômico inspirado em jogo de rpg
//caiu 1 perdeu, quantos movimentos de sorte vc terá ?

alert(`É hora de rodar o dado, quantas rodadas de sorte vc terá ?`)

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

let randomNumber = Math.round(getRandomArbitrary(1, 5))

let xAttempts = 0

while (randomNumber != 1) {
  randomNumber = Math.round(getRandomArbitrary(1, 5))
  xAttempts++
  if (randomNumber == 1) {
    alert(`Caiu numero ${randomNumber} e vc se torou pae`)
  } else {
    alert(
      `Caiu numero ${randomNumber} e vc esta em win streak a ${xAttempts} rodadas`
    )
  }
}
