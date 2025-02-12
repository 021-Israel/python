class Personagem{
    constructor(nome, energia, nivel){
        this.nome = nome
        this.energia = energia
        this.nivel = nivel
    }
    aumentarEnergia(valor){
        document.write("--------------------------------------<br>")
        document.write("energia anterior: "+this.energia+"<br>"+"<br>")
        this.energia += valor;
        document.write("Aconteceu um aumento de "+valor+" de energia<br>"+"<br>")
        document.write("Energia atual: " +this.energia)
        document.write("<br>--------------------------------------<br>")
    }
    diminuirEnergia(valor){
        document.write("<br>--------------------------------------<br>")
        document.write("A energia anterior: "+this.energia+"<br>")
        this.energia -= valor;
        document.write("houve um dimunuição de "+valor+" de energia<br>");
        document.write("Energia Atual: "+this.energia)
        document.write("<br>--------------------------------------<br>")
    
    }
    subirNivel(valor){
        document.write("<br>--------------------------------------<br>")
        document.write("Nivel anterior: "+this.nivel+"<br>")
        this.nivel += valor;
        document.write("Você elevou "+valor+" de seu nível"+"<br>")
        document.write("Nível atual: "+this.nivel)
        document.write("<br>--------------------------------------<br>")
    }
}
let person = new Personagem("Roberto",15,30)

person.aumentarEnergia(20)
person.diminuirEnergia(15)
person.subirNivel(5)
