//Function Hoisting 

console.log('Function Hoisting acontece quando a função é declarativa, se ela estiver dentro de alguma variável isso não acontece')

//Case 1

sayMyName()

function sayMyName() {
  console.log('Não é que executou !')
}

//Case 2 

sayMyName2()

const sayMyName2 = function(){
  console.log('Eu DIGO É DUVIDO EXECUTAR !')
}