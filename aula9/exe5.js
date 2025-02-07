let num1 = parseInt(prompt("Digite um número mínimo: "));
let num2 = parseInt(prompt("Digite um número máximo: "));
let numeroAleatorio = Math.floor(Math.random() *(num2 - num1 + 1) + num1);
document.write(numeroAleatorio)