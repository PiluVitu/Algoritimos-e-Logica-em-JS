// Switch

let expression = 'a'

switch (expression) {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('Default')
    break
}

function calculate(number1, operator, number2) {
  let result = 'ERROR'

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('Não Implementado')
      break
  }
  return result
}

console.log(calculate(5, '*', 2))
