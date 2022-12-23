function cliquei(){
  var nome= window.prompt('Qual o seu nome?')
  var res= document.getElementById('res')
  res.innerHTML = ''
  res.innerHTML += `<p> Olá <strong>${nome}</strong>!É um prazer te conhecer!</p>`
}