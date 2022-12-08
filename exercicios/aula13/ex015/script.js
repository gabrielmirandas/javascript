function verificador() {
  var data= new Date()
  var ano= data.getFullYear()
  var fano= document.getElementById('ano')
  var res= document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados novamente!')
  }else{
    var fsex=  document.getElementsByName('sexo')
    var idade= ano - Number(fano.value)
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero= ''
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'bebem.png')
      }else if (idade >= 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'jovemm.png')
      }else if (idade >= 21 && idade < 60){
        //adulto
        img.setAttribute('src', 'adultom.png')
      }else if (idade >= 60){
        //idoso
        img.setAttribute('src', 'veio.png')
      }
    }else if(fsex[1].checked) {
      genero= 'Mulher'
        if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'bebef.png')
      }else if (idade >= 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'jovemf.png')
      }else if (idade >= 21 && idade < 60){
        //adulto
        img.setAttribute('src', 'adultof.png')
      }else if (idade >= 60){
        //idoso
        img.setAttribute('src', 'veia.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.style.textAlign= 'center'
    res.appendChild(img)
  }
}