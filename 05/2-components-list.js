let components = []
alert(`Vamos montar uma lista de componentes do seu pc ?`)
alert(`Insira 6 componentes sendo eles:\n
1- Processador\n
2- Placa-Mãe\n
3- HD/SSD\n
4- Placa de Video\n
5- Memoria-Ram\n
6- Fonte\n
7- Adicional`)

for(let index = 0; index < 7; index++){
  let component = prompt(`Insira o componente ${index + 1}`)
  components[index] = component
}

alert(`Os componentes são :\n${components}`)