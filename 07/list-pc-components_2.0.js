const id = prompt(`Digite seu nome:`)

let list = []

let reName

let options

while (options != 4) {
  options = Number(
    prompt(
      `
Olá ${id}, bem vindo ao listador de peças de pc.
Vamos listar as peças que você quer ou tem no seu pc para ficar mais fácil de lembrar e identificar.
Digite o numero conforme a opção 

1- Adicionar um Componente

2- Editar um item 

3- Ver a lista de componentes 

4- Sair do aplicativo 
`
    ),
    1
  )
  switch (options) {
    case 1:
      const item =
        prompt(`Digite o nome do componente que quer adicionar seguindo o seguinte modelo :
      [Tipo de componente]:[Modelo do componente e Marca do componente]`)
      list.push(item)
      break
    case 2:
      reName = Number(prompt(`Digite o numero do componente que deseja editar`))

      list[reName - 1] = prompt(`
      Re-digite o componente seguindo o modelo: 
      [Tipo de componente]:[Modelo do componente e Marca do componente]
      `)
      break
    case 3:
      alert(`
        ${id} essa é sua lista :
        
        ${list}`)
      break
    case 4:
      alert(`Muito obrigado por usar o app ${id}`)
      break

    default:
      alert(`${id} digite o numero correspondente correto`)
      break
  }
}
