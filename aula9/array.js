let frutas = ["Maça","Banana","Laranja"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
if (frutas[3] == undefined) {
    console.log("índice inválido");    
}
// funções básicas
// push() >> acrescenta no final
console.log("acrescentando com push");
frutas.push("Abacate");
console.log(frutas);
// pop() >> remove o último elemento
console.log("removendo com pop");
frutas.pop();
console.log(frutas);
// sort() >> ordena um array string
console.log("ordenando o string do array");
frutas.sort();
console.log(frutas);
// copiar um array: sintaxe: [...array_a_ser_copiado]
let copia = [...frutas];
console.log("mostrando a cópia");
console.log(copia)
// length >> tamanho do array
console.log("quantos elementos tem o array");
console.log(frutas.length);
/* como trazer a função Math.random para exibir 
um elemento aleatório */
let indiceAleatorio = Math.floor(Math.random()*frutas.length);
console.log(frutas[indiceAleatorio]);
