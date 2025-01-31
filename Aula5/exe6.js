let var1 = prompt("Digite um valor: ")
let var2 = prompt("Digite outro valor: ")

if (var1.trim() == ""){
    alert("Digite um valor válido")
} else if(var1 >= var2) {
    document.write(var1)
} else {
    document.write(var2)
}
