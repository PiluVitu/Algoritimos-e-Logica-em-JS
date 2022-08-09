/* 
Type conversion (typecasting) vs Type cohesion
*/

console.log('9' + 5)

/*
  FALSY
  Quando um valor é considerado false em contextos onde um boolean é obrigatório (condicionais e loops)
  
  false
  0
  -0
  ""
  null
  undefined
  NaN
*/

console.log(
  false && 0 && -0 && '' && null && undefined && NaN ? 'verdadeiro' : 'falso'
)

/*
  TRUTHY

  Quando um valor é considerado true em contextos onde um boolean é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/

console.log(true && {} && [] && 1 && 3.23 && "0" && "false" ? 'Verdadeiro' : 'Falso')
