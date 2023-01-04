function calc(){
  var data= new Date();
  var hora= data.getHours() 
  var res= document.getElementById('res')
  res.innerHTML= ''
  res.innerHTML += `Recebi do sistema:  <mark>${data}</mark>`
}