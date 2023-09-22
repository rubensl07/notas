'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoCalcular = document.getElementById('calcular')

function somar (){
    alert("Valor somado com sucesso!!")
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    const aparecer = document.getElementById('aparecer')

    const total = numero1 + numero2

    resultado.textContent = total
}

function identificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if(numero>0){
        resultado.textContent="POSITIVO"
    } else if (numero<0) {
        resultado.textContent="NEGATIVO"
    } else {
        resultado.textContent="ZERO"
    }
}

function calcular2(){


    const MD2 = (MD1+notas5)/2
    if(MD2>=5){
        resultado.textContent="APROVADO "+MD2
    } else{
        resultado.textContent = "REPROVADO "+MD2
    }
}

function calcular(){
    const notas1 = Number(document.getElementById('nota1').value)
    const notas2 = Number(document.getElementById('nota2').value)
    const notas3 = Number(document.getElementById('nota3').value)
    const notas4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-notas')

    const MD1 = (notas1+notas2+notas3+notas4)/4

    if(MD1>=7){
        resultado.textContent = "APROVADOs "+MD1
    } else{
        resultado.textContent = "EM ANÁLISE"

    }

    botaoCalcular.addEventListener('click', calcular2)
    botaoCalcular.removeEventListener('click',calcular)



}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoCalcular.addEventListener('click', calcular)