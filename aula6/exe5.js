let nome = prompt("Digite seu nome: ");
let vezes = parseInt(prompt("Digite o número de vezes que seu nome irá aparecer: "));
let i = 0
while(i<vezes) {
    document.write(nome+"<br>")
    vezes--;
}