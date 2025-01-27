const idade = 190

// switch(true) {
//     case (idade >= 0 && idade <=10):
//         console.log("Criança")
//         break
//     case (idade >= 11 && idade <=17):
//         console.log("Adolescente")
//         break
//     case (idade >= 18 && idade <=59):
//         console.log("Adulto")
//         break
//     case (idade >= 60 ):
//         console.log("Idoso")
//         break
//     default: {
//         console.log("Idade Inválida")
//     }
// }

if (idade >= 0 && idade <10) {
    console.log("Criança")
} else if (idade >=11 && idade <=17) {
    console.log("Adolescente")
} else if (idade >= 18 && idade <=59) {
    console.log("Adulto")
} else if (idade >=60) {
    console.log("Idoso")
} else {
    console.log("Idade Inválida")
}
    