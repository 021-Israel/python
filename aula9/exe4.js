// Calculando a hipotenusa
const catetoA = parseFloat(prompt("Digite um valor: "));
const catetoB = parseFloat(prompt("Digite outro valor: "));
let hipotenusa = (catetoA**2 + catetoB**2);

console.log(Math.pow(catetoA,2));
console.log(Math.pow(catetoB,2));
console.log("A hipotenusa é: "+Math.sqrt(hipotenusa).toFixed(2));