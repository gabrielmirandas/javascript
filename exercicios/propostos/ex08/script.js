function calcular(){
var num= Number.parseInt(window.prompt('Digite um número: '))
var res= document.getElementById('res')
res.innerHTML= ''
res.innerHTML += `<p>O número a ser analisado será <mark>${num}</mark></p>`
var abs=  Math.abs(num)
var partint= Math.trunc(num)
var vint= parseInt(num)
var raizq=  Math. sqrt(num)
var raizc= Math. cbrt (num)
var expod= num**2
var expot= num**3
res.innerHTML += `<p>---------------------------------------------------------</p>`
res.innerHTML += `<p>O valor absoluto de <mark>${num}</mark> é <mark>${abs}</mark></p>`
res.innerHTML += `<p>O valor da parte inteira de <mark>${num}</mark> é <mark>${partint}</mark></p>`
res.innerHTML += `<p>O valor inteiro de <mark>${num}</mark> é <mark>${vint}</mark></p>`
res.innerHTML += `<p>O valor da raiz quadrada de <mark>${num}</mark> é <mark>${raizq}</mark></p>`
res.innerHTML += `<p>O valor da raiz cúbica de <mark>${num}</mark> é <mark>${raizc}</mark></p>`
res.innerHTML += `<p>O valor ao quadrado de <mark>${num}</mark> é <mark>${expod}</mark></p>`
res.innerHTML += `<p>O valor ao cubo de <mark>${num}</mark> é <mark>${expot}</mark></p>`

}