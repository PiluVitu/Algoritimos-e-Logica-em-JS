// Throw

function sayMyName(name) {
  if ((name === '')) {
    throw 'Nome é Obrigatório'
  }
  console.log(name)
}

//Try...catch

try {
  sayMyName('')
} catch (e) {
  console.log(e)
}
