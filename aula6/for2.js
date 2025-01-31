let nome, cadastro = "";
for(let i=0; i<3; i++){
    nome = prompt("Informe o nome: ");
    //alteração no cadastro +=
    cadastro += nome + "<br>";
}
document.write(cadastro);

