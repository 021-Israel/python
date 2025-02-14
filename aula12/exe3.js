class Televisao{
    constructor(canalAtual, volume){
        this.canalAtual = canalAtual
        this.volume = volume
    }
    aumentarVolume(valor){
        document.write("Função aumentar volume"+"<br>")
        document.write(` volume antigo: ${this.volume}<br>`)
        document.write(`aconteceu um aumento de +${valor}<br>`)
        document.write(`volume após o aumento: ${this.volume + valor}<br>`)
        document.write("---------------------------------------<br>")

    }
    diminuirVolume(valor){
        document.write("Função diminuir volume"+"<br>")
        document.write(` volume antigo: ${this.volume}<br>`)
        document.write(`aconteceu diminuição de -${valor}<br>`)
        document.write(`volume após o diminuição: ${this.volume - valor}<br>`)
        document.write("---------------------------------------<br>")
    }
    mudarCanal(novoCanal){
        document.write("Função de mudar canal<br>")
        document.write(`Canal atual: ${this.canalAtual}<br>`)
        document.write(`Canal após mudança: ${novoCanal}<br>`)
        document.write("---------------------------------------<br>")

    }
}
let tv = new Televisao("SBT", 20)
tv.aumentarVolume(15);
tv.diminuirVolume(10);
tv.mudarCanal("TNT");