/*
 Faça um programa que tenha um menu e  apresente a seguinte mensagem:
 Olá usuário!Digite a opção desejada

   1. Cadastrar um item na lista
   2. Mostrar itens cadastrados
   3. Sair do programa.
 0 programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:
 Caso o usuário digite 1,ele poderá cadastrar um item em uma lista
 Caso o usuário digite 2,ele poderá ver os itens cadastrados
   Se não houver nenhum item cadastrado,mostrar a mensagem:
    "Não existem itens cadastrados"
 Caso o usuário digite 3,a aplicação deverá ser encerrada.
*/

//Capture the data
//Make a logic to be able to switch between options
// option one add a item on array
// option two show array itens
// option three end the program

const id = prompt(`Digite seu Nome :`)

let list = []
let index

while (index != 3) {
  index = Number(
    prompt(
      `Olá ${id}! 
    Digite o número de opções desejada :
      
    1. Cadastrar um item na lista
  
    2. Mostrar itens cadastrados
      
    3. Sair do programa
      
      `,
      1
    )
  )
  switch (index) {
    case 1:
      let listItem = prompt(`Insira um item na lista :`)
      list.push(listItem)
      break
    case 2:
      if (list.length == 0) {
        alert(`Não existem itens cadastrados`)
      } else {
        alert(`A sua lista é essa: \n${list}`)
      }
      break
    case 3:
      alert(`Flw, muito obrigado por usar a nossa lista`)
      break
    default:
      alert(`Digite o numero corretamente`)
      break
  }
}
