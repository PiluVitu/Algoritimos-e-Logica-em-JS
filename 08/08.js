/*
  Crie uma lista de pacientes 

  Cada paciente dentro da lista, deverá conter 
    Nome 
    Idade
    Peso
    Altura 

  Escrever uma lista contendo o nome dos pacientes 

  PROCURAR APRENDER COMO Encontrar um objeto em um array por uma de suas propriedades
*/

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
    name: 'Lara Piersson',
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
    name: 'Jão',
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
    height: 17,
    comorbidity: ''
  }
]

const patientsInfo = []
let comorbidityStatus
let genderStatus
let bloodStatus

for (let patient of patients) {
  if (patient.comorbidity == '') {
    comorbidityStatus = 'não possui'
  } else {
    comorbidityStatus = 'possui'
  }
  if (patient.gender == '') {
    genderStatus = 'não binário'
  } else {
    if (patient.gender == 'Masculino') {
      genderStatus = 'homem'
    } else {
      genderStatus = 'mulher'
    }
  }
  if (patient.blood == '') {
    bloodStatus = 'não cadastrou'
  } else {
    bloodStatus = patient.blood
  }

  patientsInfo.push(
    `\nO paciente ${patient.name} é ${genderStatus} tem ${patient.age} anos, massa corporal de ${patient.weight}Kg, mede ${patient.height}cm, ${comorbidityStatus} comorbidade e ${bloodStatus} tipo sanguíneo\n`
  )
}

alert(patientsInfo)
