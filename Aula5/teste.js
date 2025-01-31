//ler dois valores
let valor1 = prompt("Digite um valor: ")
let valor2 = prompt("Digite outro valor: ")

//testa se os valores são nulos
if(valor1.trim === "" || valor2 === "") {
    alert("Informe um valor válido");
} else {

    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);
    let soma = (num1 + num2);


    //conversão dos valores
    // let num1 = parseInt(valor1);
    // let num2 = parseInt(valor2);
    //exibir a soma
    document.write("O valor é: "+soma)
    
    //Faça uma condição para testar se a soma é maior ou menor que 20

    if (soma > 20) {
        document.write("<br> soma é maior que o número 20")
}       else if(soma < 20) {
        document.write("<br> a soma é menor que 20")
}       else {
        document.write("<br> soma igual a 20")
}
}