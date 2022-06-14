/*
Dada uma lista de pacientes,descubra o IMC de cada paciente
imprima
"Paciente X possui o IMC de: Y"
Onde X é o nome do paciente e Y é o IMC desse paciente
Crie uma função para fazer o cálculo de IMC
*/
//peso/(altura*altura)

const patients = [
  {
    name: 'Paulo Victor',
    gender: 'Masculino',
    age: 21,
    blood: 'A+',
    weight: 110,
    height: 179,
    comorbidity: 'Obesidade'
  },
  {
    name: 'Lívia Ricci',
    gender: 'Feminino',
    age: 21,
    blood: 'A+',
    weight: 50,
    height: 160,
    comorbidity: ''
  },
  {
    name: 'Arthur Brigido',
    gender: 'Feminino',
    age: 23,
    blood: 'A+',
    weight: 60,
    height: 183,
    comorbidity: ''
  },
  {
    name: 'Lara Pierson',
    gender: 'Feminino',
    age: 21,
    blood: 'O+',
    weight: 50,
    height: 163,
    comorbidity: ''
  },
  {
    name: 'Junin',
    gender: 'Masculino',
    age: 24,
    blood: 'B+',
    weight: 80,
    height: 183,
    comorbidity: ''
  },
  {
    name: 'Maria Chiquinha',
    gender: '',
    age: 18,
    blood: 'A-',
    weight: 60,
    height: 150,
    comorbidity: 'Diabetes'
  },
  {
    name: 'Jão Melo',
    gender: 'Masculino',
    age: 20,
    blood: 'A+',
    weight: 80,
    height: 169,
    comorbidity: ''
  },
  {
    name: 'Pedro Dantas',
    gender: 'Masculino',
    age: 21,
    blood: '',
    weight: 60,
    height: 170,
    comorbidity: ''
  }
]

function calcIMC (weight, height) {
  return (weight / ((height/100)**2)).toFixed(2)
}  


function patientImc (patient) {
  return`Paciente ${patient.name} possui o IMC de: ${calcIMC(patient.weight, patient.height)}`
}

for(let patient of patients){
  let IMCmessage = patientImc(patient)
  alert(IMCmessage)
}