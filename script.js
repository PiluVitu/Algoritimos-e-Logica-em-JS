//Manipulando Arrays

let techs = ["HTML", "CSS", "JS"]
console.log(techs)

//Adicionar um item no fim 
techs.push("Python")
console.log(techs)

//Adicionar no começo 
techs.unshift("React")
console.log(techs)

//Remover do Fim
techs.pop()
console.log(techs)

//Remover do Começo 
techs.shift()
console.log(techs)

//Pegar somente alguns elementos do array
console.log(techs.slice(1,3))

//Remover 1 ou mais items em qualquer posição do array
techs.splice(1,2)
console.log(techs)

//Encontrar a posição de um elemento no array 
console.log(techs.indexOf("HTML"))