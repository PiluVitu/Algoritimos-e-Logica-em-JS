alert('Digite dois números para fazer operações')

let numberOne = Number(prompt('Digite o 1 Numero'))
let numberTwo = Number(prompt('Digite o 2 Numero'))

const resultSum = numberOne + numberTwo
const resultSub = numberOne - numberTwo
const resultMulti = numberOne * numberTwo
const resultDiv = numberOne / numberTwo
const resultRestOfDiv = numberOne % numberTwo

alert('O resultado da soma é : ' + resultSum)
alert('O resultado da subtração é : ' + resultSub)
alert('O resultado da multiplicação é : ' + resultMulti)
alert('O resultado da divisão é : ' + resultDiv)
alert('O resto da divisão é : ' + resultRestOfDiv)