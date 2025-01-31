let lado1 = prompt("Digite um valor");
let lado2 = prompt("Digite um valor");
let lado3 = prompt("Digite um valor");

if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
    
     if (lado1 === lado2 && lado2 === lado3) {
        document.write("Triângulo Equilátero");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        document.write("Triângulo Isósceles");
    } else {
        document.write("Triângulo Escaleno")
    }  
}        
    
// } 

// let lado1 = parseInt(prompt("Digite o primeiro lado: "));
// let lado2 = parseInt(prompt("Digite o segundo lado: "));
// let lado3 = parseInt(prompt("Digite o terceiro lado: "));

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//     document.write("Você consegue formar um triângulo. ");

//     switch (true) {
//         case (lado1 === lado2 && lado1 === lado3):
//             document.write("Este triângulo é equilátero.");
//             break;
//         case (lado1 === lado2 || lado1 === lado3 || lado2 === lado3):
//             document.write("Este triângulo é isósceles.");
//             break;
//         default:
//             document.write("Este triângulo é escaleno.");
//             break;
//     }
// } else {
//     alert("Você não consegue formar um triângulo.");
// }