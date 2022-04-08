/*var nome = prompt('Qual é seu nome?')// vai perguntar o nome da pessoa
alert(`é um grande prazer te conhecer ${nome}!`)
var n1 = Number(prompt('Digite um numero: '))
var n2 = Number(prompt('Digite outro numero: '))
var s = n1+n2
alert(`o valor da soma é ${s}`)
*/



function somar(){
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var nome = document.getElementById('nome')
    var nomes = nome.value
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var s = num1+num2
    
    res.innerHTML = `<p>Olá ${nomes} seu nome posssui ${nomes.length} Letras</p>`
    res.innerHTML += `<p>A soma entre os valores da: ${s}</p>`

}