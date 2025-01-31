// let nome, cadastro = "";
// let continua = "s";
// let i = 0;
// while(continua == "s"){
//     nome = prompt("Informe o nome: ");
//     cadastro = cadastro + nome + "<br>";
//     i++;
//     continua = prompt("deseja continuar?<s/n>");
// }
// document.write(cadastro);
// document.write("Foram lidos "+i+" nomes");Portuguese

let nome, cadastro = "";
let continua = "s";
let i = 0;
while(continua == "s"){
    nome = prompt("Informe o nome: ");
    //alteração no cadastro +=
    cadastro += nome + "<br>";
    i++;
    continua = prompt("deseja continuar?<s/n>");
}
document.write(cadastro);
document.write("Foram lidos "+i+" nomes");Portuguese
