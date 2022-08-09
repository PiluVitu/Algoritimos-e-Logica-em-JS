// if...else

// 1- Sempre fazer a execução da condição dentro do bloco 
// 2- Transformar condicionais em variáveis que deem sentido 
// 3- CUIDADO AS CONDICIONAIS ACEITAM VALORES TRUTHY OR FALSY
// 4- TOMAR CUIDADO COM A ORDEM DAS CONDIÇÕES, SEMPRE DO MAIS ESPECIFICO PARA MAIS ABRANGENTE

const temperature = 37
const hightTemperature = temperature >= 37.5
const mediumTemperature = temperature >= 37 && temperature < 37.5

if(hightTemperature){
  console.log('Febre alta boy, cê ta doido')
} else if (mediumTemperature){
  console.log('Febre moderada né pae')
}else {
  console.log('TA DIBAS PAE')
}