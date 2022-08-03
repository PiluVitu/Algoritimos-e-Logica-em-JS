//Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 5416511615164.5645626545541611465156156

//Ajuste de casa decimais 
console.log((number).toFixed(2))

//Troca do ponto pela virgula 
console.log((number).toFixed(2).replace('.',','))
//OBS: Deixa de ser número pois ',' não faz parte de um número, transformando o antigo numero em string 