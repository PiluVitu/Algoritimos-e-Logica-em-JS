const id = prompt(`Vamos calcular as suas notas ? Digite seu nome:`)

const noteOne = Number(prompt(`Digite sua nota do primeiro semestre`))
const noteTwo = Number(prompt(`Digite sua nota do segundo semestre`))
const noteThree = Number(prompt(`Digite sua nota do trabalho`))

const sumOfPoints = 21

const average = ((noteOne + noteTwo + noteThree) / 3).toFixed(1)
const rest = (sumOfPoints - average * 3).toFixed(1)

const approved = average >= 7
const reproved = average <= 3.5
const lastChance = average < 7

if (reproved) {
  alert(`Ta complexo ${id}, nem tirando ${rest} para te salvar, se lasca-tes`)
} else if (average == 7) {
  alert(`Foi na rabada ${id}, mas deu tudo certo e você passou`)
} else if (average == 10) {
  alert(`Tú é foda ${id}, parabéns pra krl, nunca duvidei`)
} else if (lastChance) {
  alert(
    `Que pena vc não passou por pouco, ainda tem uma chance só precisa tirar ${rest} ou acima. Boa sorte, não desista`
  )
} else {
  alert(`Parabéns, você passou continue assim`)
}

if (reproved) {
  alert(`Aluno: ${id}\nMedia: ${average}\nTa reprovado pae, vlw flw`)
} else if (lastChance) {
  alert(
    `Aluno: ${id}\nMedia: ${average}\nPrecisa tirar para passar: ${rest}\n Você consegue não desista`
  )
} else {
  alert(
    `Aluno: ${id}\nMedia: ${average}\nContinue assim você é um espelho para todos os alunos`
  )
}
