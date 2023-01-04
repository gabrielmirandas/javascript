function carregar() {
var msg= window.document.getElementById('msg');
var img= window.document.getElementById('imagem');
var data= new Date();
var hora= data.getHours();
msg.innerHTML= `Agora são ${hora}hrs`;
if(hora >= 0 && hora < 12){
    img.src= '../imagens/manha.jpeg'
    document.body.style.background = 'blue'; 
}else if (hora >= 12 && hora < 18) {
        img.src= '../imagens/tarde.jpeg'
        document.body.style.background = 'red';
    }else {
    img.src= '../imagens/noite.jpeg'
    document.body.style.background = 'gray';
 }
}