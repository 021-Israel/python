class Retangulo{
    constructor(altura, largura){
        this.largura = largura
        this.altura = altura
    }
    calcArea(){
        let area = this.largura*this.altura
        document.write("A largura do retangulo é: "+this.largura+"<br>")
        document.write(" a altura do retangulo é de: "+this.altura+"<br>")
        document.write( "a area do retangulo é = "+area)

    }

}
let largura = prompt("Digite um valor para a largura")
let altura = prompt("Digite um valor para a altura")
let forma = new Retangulo(largura, altura)
forma.calcArea()