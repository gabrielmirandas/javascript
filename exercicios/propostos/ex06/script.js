function cliquei(){
  var res= document.getElementById('res')
  var n1=  Number.parseInt(window.prompt('Digite um número: '))
  var n2=  Number.parseInt(window.prompt('Digite um número: '))
  var soma= n1 + n2
  res.innerHTML = ''
  res.innerHTML += `O resultado da soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual á ${soma}`
}