//Function Scope 

//Case 1 
console.log('CASE 1')
let change 

function changingChange(change){
  change = 'Num é que mudou!'
  return change
}

console.log('Depois da function change é ' + changingChange(change))
console.log('Antes da function change é ' + change)
console.log(`Percebe-se que o change só é atribuído dentro da função, pois a mesma tem um parâmetro que impede que algo seja atribuído além daquele escopo`)

//Case 2 
console.log('CASE 2')
let charge = 'Que é isso meu filho, CALMA'

function changingCharge(charge){
  charge = 'Num é que mudou!'
  return charge
}

console.log('Depois da function change é ' + changingChange(charge))
console.log('Antes da function change é ' + charge)
console.log(`Percebe-se que o change só é reatribuído dentro da função, pois a mesma tem um parâmetro que impede que algo seja atribuído além daquele escopo`)

//Case 3 
console.log('CASE 3')
let chunga = 'Que é isso meu filho, CALMA'

function changingChunga(){
  chunga = 'Num é que mudou!'
  return chunga
}

console.log('Antes da function change é ' + chunga)
console.log('Depois da function change é ' + changingChunga())
console.log('Antes da function após executa-la change é ' + chunga)
console.log(`Percebe-se que o change dentro da função é atribuído no escopo global, pois a mesma não tem um parâmetro que impede que algo seja atribuído além daquele escopo`)