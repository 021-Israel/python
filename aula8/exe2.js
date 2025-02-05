// function soma(a,b){
//     return(a+b);
// }

// let resultado1 = soma(5,10);
// alert("O resultado da soma é: "+resultado1);

// function substaçao(a,b){
//     return (a-b);
// }
// let resultado2 = substaçao(15,5);
// alert("O resultado da substração é: "+resultado2);

// function divisao(a,b){
//     return(a/b);
// }
// let resultado3 = divisao(50,2);    
// alert("O resultado da divisão é: "+resultado3)

// function multiplicacao(a,b){
//     return(a*b)
// }
// let resultado4 = multiplicacao(5,10)
// alert("O resultado da multiplicação é: "+ resultado4)    


function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

// principal para ler os números e a operação
let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao, divisao):").toLowerCase();

// Chamando a função correspondente à operação escolhida
switch (operacao) {
    case 'soma':
        alert("Resultado: "+ soma(a, b));
        break;
    case 'subtracao':
        alert("Resultado: "+ subtracao(a, b));
        break;
    case 'multiplicacao':
        alert("Resultado: "+ multiplicacao(a, b));
        break;
    case 'divisao':
        alert("Resultado: "+ divisao(a, b));
        break;
    default:
        resultado = "Operação inválida!";
}