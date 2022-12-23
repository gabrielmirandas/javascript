window.alert('Bem vindo ao meu site!')
function cliquei(){
  var res= document.getElementById('res')
  var n1=  Number.parseInt(window.prompt('Digite um número: '))
  var met= n1/2
  var dob= n1*2
  res.innerHTML = ''
  res.innerHTML += `O dobro de ${n1} é ${dob} e sua metade é ${met}`
}