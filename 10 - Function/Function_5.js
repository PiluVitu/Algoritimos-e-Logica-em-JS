//Callback Function

function myCallBack(callback) {
  console.log('Antes do CallBack')
  callback()
  console.log('Depois do CallBack')
}

myCallBack(() => {
  console.log('No Callback')
})
