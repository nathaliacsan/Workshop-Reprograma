// Primeiro vamos pegar os inputs do html

var inputSalario = document.querySelector("#ganho-mes")
var inputHoras = document.querySelector("#horas-dia")
var resultado = document.querySelector("#resposta")

// Criaremos a funçao para ser chamada ao clicar no botao
function calcularValorHora() {

    var salario = inputSalario.valueAsNumber // transformando o valor em numero
    var horas = inputHoras.valueAsNumber // transformando o valor em numero

    var horasMes = horas * 22 // multiplicacao por 22 pois sao os dias uteis do mes
    var valorHora = salario  /  horasMes // dividir o salario da variavel pelas horas mes

    var valorHoraDuasCasas = valorHora.toFixed(2) // O fixed 2 vai deixar em 2 casas depois da virgula

    resultado.textContent = "R$ " + valorHoraDuasCasas // text Content muda o conteudo do texto

}

