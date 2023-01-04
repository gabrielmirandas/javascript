function calc(){
var res= document.getElementById('res')
var nome= window.prompt('Qual o seu nome?')
var n1= Number.parseInt(window.prompt(`Qual a primeira nota de ${nome}?`))
var n2= Number.parseInt(window.prompt(`Qual a segunda nota de ${nome}?`))
var media= (n1+n2)/2
res.innerHTML= ''
  res.innerHTML += `<p>Calculando a nota de <mark>${nome}</mark></p>`
  res.innerHTML += `<p>A média dos números <mark>${n1}</mark> e <mark>${n2}</mark> é <mark>${media}</mark></p>`
if(media > 6){
  res.innerHTML += `<p>Parabéns</p>`
}else{
  res.innerHTML += `<p">Estude um pouco mais</p>`
}



}