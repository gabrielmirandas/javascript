function carregar(){
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()

var hora = 18
msg.innerHTML= `Agora são ${hora}hrs`
if(hora >= 0 && hora < 12){
    img.src= 'fotomanha.jpeg'
}else if (hora >= 12 && hora < 18) {
        img.src= 'fototarde.jpeg'
    }else {
    img.src= 'fotonoite.jpeg'
 }
}