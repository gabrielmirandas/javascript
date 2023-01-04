function calc(){
  var num= Number.parseInt(window.prompt('Digite um número'))
  var res= document.getElementById('res')
  if(num%2 == 0){
    res.innerHTML = ''
    res.innerHTML += `O número ${num} é par`
  }else{
    res.innerHTML = ''
    res.innerHTML = `O número ${num} é ímpar`
  }
}