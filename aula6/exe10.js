// let nome = [];
// let cidade = []

// //coletando os dados de 10 pessoas
// for(let i = 0; i < 3; i++) {
//     nome.push(prompt("Informe o nome da pessoa "+(i+1)+":"));
//     cidade.push(prompt("Informe a cidade da Pessoa "+(i+1)+":"));
// }
// let indice;
// let continua;
// while(true) {
//     indice = prompt("Informe o indice");
//     if (indice>=0 && indice <3) {
//         alert("Nome..: "+nome [indice]+ " Cidade..: "+cidade [indice]);
//     } else {
//         alert("Indice inválido");
//     }
    
//     continua = prompt("Deseja continuar a ler outra indice s/n").toLocaleLowerCase()
//     if (continua !="s") break
// }

let pessoa = [];
let cidade;
let nome;

//coletando os dados de 10 pessoas
for(let i = 0; i < 3; i++) {
    nome.push(prompt("Informe o nome da pessoa "+(i+1)+":"));
    cidade.push(prompt("Informe a cidade da Pessoa "+(i+1)+":"));
    pessoa.push({"Nomes":nome, "Cidades":cidade});
}
let indice;
let continua;
while(true) {
    indice = prompt("Informe o indice");
    if (indice>=0 && indice <3) {
        alert("Nome..: "+pessoa [indice]+ " Cidade..: "+pessoa [indice].cidade);
    } else {
        alert("Indice inválido");
    }
    
    continua = prompt("Deseja continuar a ler outra indice s/n").toLocaleLowerCase()
    if (continua !="s") break
}
document.write(pessoa)