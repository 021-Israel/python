//Criação de classe
class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca; //definição dos atributos
        this.modelo = modelo;
        this.cor = cor;
    }
    acelerar(){
        document.write("O carro "+this.modelo + " está acelerando..."+"<br>");
    }
    frear(){
        document.write("O carro " +this.modelo + " Freou ararrrrrrrr"+"<br>")
    }

}

//Criando um objeto a partir da classe carro
let meuCarro  = new Carro("Toyota","Corolla","Preto");
meuCarro.acelerar();
let meuOutroCarro = new Carro("Fiat","Uno","Prata");
meuOutroCarro.acelerar();
meuOutroCarro.frear()