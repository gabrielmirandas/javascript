function cliquei(){
  var nome= window.prompt('Qual o seu nome?')
  var res= document.getElementById('res')
  var n1= Number.parseInt(window.prompt(`Qual a primeira nota de ${nome}?`))
  var n2= Number.parseInt(window.prompt(`Qual a segunda nota de ${nome}?`))
  var media = (n1+n2)/2
  res.innerHTML= ''
  res.innerHTML += `<p> Aqui serão apresentado as notas de <mark>${nome}</mark> </p>`
  res.innerHTML += `<p> Sua primeira nota foi <mark>${n1}</mark> e sua segunda foi <mark>${n2}</mark>, logo a média será <mark>${media}</mark> </p>`
}