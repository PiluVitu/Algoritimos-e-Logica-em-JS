const id = prompt(`Digite seu nome: `)

alert(`Olá ${id} vamos fazer uma lista compras para uma festa ?`)

let buyList = []

let item

for (let index = 0; index < 6; index++) {
  
  if (index == 0) {
    item = prompt(`${index + 1}- Digite o numero de convidados`)
  } else if (index == 1) {
    item = prompt(`${index + 1}- Digite quais bebidas vão servir`)
  } else if (index == 2) {
    item = prompt(`${index + 1}- Digite o tipo do bolo`)
  } else if (index == 3) {
    item = prompt(`${index + 1}- Digite os tipos de salgados`)
  } else if (index == 4) {
    item = prompt(`${index + 1}- Digite onde será o espaço`)
  } else {
    item = prompt(`${index + 1}- Digite o tipo de traje`)
  }
  
  buyList[index] = item
}

alert(`Eita, foi muito complicado ? Relaxa, vamos recapitular\n1- Numero de Convidados: ${buyList[0]} \n2- Bebidas: ${buyList[1]}\n3- Bolo: ${buyList[2]}\n4- Salgados: ${buyList[3]}\n5- Espaço: ${buyList[4]}\n6- Traje: ${buyList[5]}\nTenha uma ótima festa (recomenda-se printar essa tela !)`)
