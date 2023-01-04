function calc(){
  var n1= Number.parseInt(window.prompt('Digite o primeiro número: '))
  var n2= Number.parseInt(window.prompt('Digite um outro valor: '))
  var res= document.getElementById('res')
  if(n2 > n1){
    res.innerHTML= ''
    res.innerHTML += `O valor <mark>${n2}</mark> é maior que <mark>${n1}</mark>`
  }else{
    res.innerHTML= ''
    res.innerHTML += `O valor <mark>${n1}</mark> é maior que <mark>${n2}</mark>`
  }
}