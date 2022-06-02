let user = prompt('Insira seu nome: ')

alert(`Vamos calcular sua media ${user} ?`)

let note1 = Number(prompt('Insira sua primeira nota: '))
let note2 = Number(prompt('Insira sua segunda nota: '))
let note3 = Number(prompt('Insira sua nota do trabalho: '))
const sum = (note1 + note2 + note3)
const average = ((sum) / 3).toFixed(2)

if (average <= 2.6) {
  alert(`Nem jesus na causa ${user}, tu se fodeu bonito`)
} else if (average == 6) {
  alert(`TU ta é doido(a) ${user} ? PASSOUUU NO DETALHEEEEEEEEEE`)
} else if (average == 10) {
  alert(`TU ta é doido(a) ${user} ? Esculachou pa krl kkjkkj \nVOA MLK`)
} else if (average > 6) {
  alert(
    `PARABÉNS ${user}. Você se esforçou e atingiu os resultados necessários e passou`
  )
} else {
  alert(
    `Não foi dessa vez ${user}, mas fique de boa você so precisa tirar uma nota maior ou igual a 6 para passar. Boa sorte`
  )
}

alert(`Nome do Aluno(a): ${user}\nMedia do(a) ${user}: ${average}`)
