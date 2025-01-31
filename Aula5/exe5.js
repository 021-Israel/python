let numero = prompt("Digite um numero: ")

if(numero.trim() == '' ) {
    document.write("Digite um numero válido")
} else {
    if (parseInt(numero % 2) == 0) {
        document.write("É par")
    }else {
        document.write("é impar")
    }
}