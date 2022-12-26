var res= document.getElementById('res')
var c= 0
function reset(){
  res.innerHTML= ''
}
function apertei(){
 c++
 res.innerHTML= `Foram feitos ${c} cliques`
}