// let matriz = [
//     [8.5, 7.2, 9.5],
//     [9.5, 6.5, 7.5],
//     [9.5 ,3.5 ,8.5]
// ];
// for (let i=0; i<matriz.length; i++) {
//     document.write(`Notas do aluno ${i + 1}: `+"<br>");
//     for(let j = 0; j < matriz[i].length; j++) {
//         document.write(matriz[i][j]+"<br>");
//     }
// }

// let matriz = []
// let linhas = 3
// let colunas = 3
// let medias = []

// for(let i = 0;i<linhas;i++){
//     matriz[i] = []
//     let soma = 0
   
//     for(let j = 0;j<colunas;j++){
//         matriz[i][j] = parseFloat(prompt("Digite uma nota para a posição ["+i+"]["+j+"]"))
//         document.write("Nota:"+ matriz[i][j]+"<br>")//percorre a lista
//         soma += matriz[i][j]
        
//     }
    

//     let media = soma / linhas;
//     medias.push(media);
//     document.write("Soma da linha " + i + ": " + soma + "<br>");
//     document.write("Média da linha " + i + ": " + media.toFixed(1) + "<br><br>");

     
    
// }

// a)
let notas = [
    [8.5, 2, 9.5],
    [3, 6.5, 7.5],
    [9.5, 3.5, 8.5]
];

// b)
console.log("Matriz é: ");
console.log(notas)
for (let i = 0; i < notas.length; i++) {
    document.write(notas[i].join(" | ") + "<br>");
}
// c)
document.write("Média dos alunos" + "<br>")
for (let i = 0; i < notas.length; i++){
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j]
    }
    let media = soma / notas[i].length;
    document.write("Aluno: "+(i+1)+" Média: "+media.toFixed(1)+"<br>");
}
// d)
let maiorNota = notas[0][0];
for (let i=0; i<notas.length; i++){
    for (let j=0; j<notas[i].length; j++){
        if (notas[i][j]>maiorNota){
            maiorNota = notas[i][j];
        }
    }
}
document.write("Maior Nota: "+maiorNota);
// e)

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] < 6) {
            notas[i][j] = 6;
        }
    }
}
document.write("<br>"+notas);