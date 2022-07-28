//1-
let weight

//2-
console.log(typeof weight)

//3-
let name = 'Paulo'
let age = 21
let stars = 4.89
let isSubscribed = true

let student = {}

//4-
console.log(typeof student)

//4.1- 
student = {
  name: 'Paulo',
  age: 21,
  weight: 115,
  isSubscribed: true,
}

console.log(student)

//4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

//5- 
let students = []


//6- 
students =[
  student
]

console.log(students)

//7- 
console.log(students[0])

//8- 
const ricci = {
  name: "Ricci",
  age: 21,
  weight: 56,
  isSubscribed: true
}
students.push(ricci)
console.log(students)

//9
let answer = 'undefined because var not be defined before console.log' 

console.log({ricci})