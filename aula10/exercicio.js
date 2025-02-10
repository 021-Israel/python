/* monte uma matriz 3x3 que preencha todo o seu conteúdo
via prompt.*/ 

let matriz = []; //Criação de matriz vazias
let linhas = 3; //qntd de linhas
let colunas = 3; //qntd de colunas
for(let i=0; i <linhas; i++) {
    matriz[i] = []; //criação de uma nova linha
    for(let j=0; j<colunas; j++) {
        matriz [i][j] = parseInt(prompt("Digite um valor para a posição ["+i+"["+j+"]"))
    }
}
// console.log("matriz informada pelo usuário: ");
document.write("matriz informada pelo usuário: "+"<br>");
for(let i = 0; i < linhas; i++) {
    document.write(matriz[i].join(" , ")+"<br>")
}
