let n1 = prompt("Digite um valor")
let n2 = prompt("Digite outro valor")
let n3 = prompt("Digite outro valor")
let media = (n1+n2+n3)/3

if (n1.trim() == '') {
    alert("Digite um valor válido")
}
document.write(media)