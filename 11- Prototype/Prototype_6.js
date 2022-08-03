//Manipulando String e Arrays

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let text = 'Cabo C ta ai ?'
let text1 = 'Paulo'
let text2 = 'Cabo C ta ai ?  Cabo C ta não  Cabo C ta no chão'
let array = text.split(' ')
let array1 = text1.split('')
let array2 = text2.split('  ')
console.log(`Array frase separada 
${array}`)
console.log(`Array palavra separada 
${array1}`)
console.log(`Array varias frases separadas 
${array2}`)
let arrayWithUnderScore = array.join("_")
let arrayWithUnderScore1 = array1.join("")
let arrayWithUnderScore2 = array2.join("/")
console.log(arrayWithUnderScore)
console.log(arrayWithUnderScore1)
console.log(arrayWithUnderScore2)