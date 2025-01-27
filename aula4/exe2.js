let valor1 = 2
let valor2 = 7

let operacao = "multiplicacao"

switch(operacao) {
    case "soma":
        console.log(valor1 + valor2)
        break
    case "subtracao":
        console.log(valor1 - valor2)
        break
    case "multiplicacao":
        console.log(valor1 * valor2)
        break
    case "divisao":
        console.log(valor1 / valor2)
        break
    default:
        console.log("operação não existe!")                
}

    