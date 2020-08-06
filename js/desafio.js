// Primeiro vamos pegar os inputs do html

var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcular() {

    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber

    var valorProjeto = valorHora * horasProjeto // multipliquei a hora pelo projeto

    var valorFinal = valorProjeto.toFixed(2)

    resultado.textContent = "R$ " + valorFinal
}

console.log("Adoreeeeeei o workshop, obrigada pela tarde ^-^")