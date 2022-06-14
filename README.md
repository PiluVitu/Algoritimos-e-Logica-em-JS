# Algorithms-e-Logica-em-JS

## Sintaxe e boas praticas
```js
// ponto e vírgula é facultativo
const myConst = "Constante"

// escrever com camelCase
const myConst = "Constante2"

// Procurar escrever meus códigos em inglês
// para treinar, aumentar as oportunidades futuras
function doSomething(myArgument){}
```

## Variáveis
```js
const
let
var //Não é mais tão utilizada
```
## Tipos de dados 
```js
String ("Paulo" 'V T' `Silva)
Number (22)
Boolean (true, false)
null (vazio)
undefined (indefinido)
```
## Estrutura de dados
```js
//Array
const myArray = [1,2,"a","b",true]
//Object
const myObject = { property:"value"}
``` 
## Funções
```js
// 1. Criação e tipos de funcóes
// Named
function myFunction(){}

// Anonymous
const myFunction = function(){}

// Arrow
const myFunction =() => {}

// Arguments && return
function sum (a, b) {
	return a + b 
}

const sum = (a, b) => a + b 

// 2. Execução
myFunction()
sum(1, 2)
```
## Fluxo da aplicação 
```js
// if, else if, else
const isRainning = true
if (true){
	alert("Está chovendo, pega o guarda chuvas 🌧️")
} else {
	alert("Dia limpo 🌤️")
}

// Swicth
const water = "com gás"
Swicth(water) {
	case "com gás":
		alert("Essa água é com gás")
	break
	case "sem gás":
		alert("Essa água é sem gás")
	break
	case "da fonte"
		alert("Água fresquinha da fonte")
	break
	default:
		alert("Cadê minha água ?")
}
```
## Estrutura de repetição
```js
// While
let play = true
while(play) {
// Fazer algo até o play ser falso
// Criar uma lógica para o play se tornar falso 
// Se não, loop eterno
}

// For(tradicional)
let text = "abc"
for (let i = 0; i < text.length; i++){
	alert(text[i])
}

// For..Of
for (let char of text) {
	alert(char)
}
```

## Operadores
```js
() // Group Operator - Agrupamento

// Matemáticos

* // Multiplicação
** // Exponenciação
/ /// Divisão
% // Resto da divisão
+ // Soma
- // Subtração

// Lógicos
&& // E logico (Duas condições precisam ser verdadeiras para passar)
|| // OU lógico (Uma das duas condições precisa ser verdadeira para passar)
! // Não lógico (NEGAÇÃO ex:!true = false || !false = true )

// Comparação - Relacional
> // Maior
< // Menor
>= // Maior Igual
<= // Menor Igual
== // Igualdade
=== // Igual no valor e do mesmo tipo (estritamente igual)
!= // Desigualdade
!== // Diferente do valor ou do tipo (estritamente diferente)

// Atribuição
= // Atribuição de valor
*= // Divisão e atribuição de valor
+= // Soma e atribui valor
-= // Diminui e atribui 

// Outros operadores / expresões 

typeof //Tipo de dado 
++ // Incremento 
-- // Decremeto
{} // Objeto vazio ou bloco de código 
[] // Array Vazio 
, // Separa elementos de um array, objeto ou criação de multivariaveis
```

