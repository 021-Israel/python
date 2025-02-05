function verificarIdade(idade){
    let result= ""

    if(idade >= 18){
   result = "Maior de idade"
 }   else {
   result = "Menor de idade"
    }
    return result
}
    

let idade = prompt("Informe sua idade");

document.write(verificarIdade(idade))