function cumprimentar(nome) {
    alert("Olá, " + nome + "! Seja bem-vindo.");
}

// // Chamando a função com diferentes valores
// cumprimentar("Ana");
// cumprimentar("Carlos");
// cumprimentar("Mariana");
// let nome = prompt("Informe seu nome: ");
// cumprimentar(nome)
let nomes = ["Davi","Felipe","Pedro","Adriel","Alex"];
for (let i = 0; i < nomes.length;i++) {
    cumprimentar(nomes[i]);
}