class Filme{
    constructor(titulo, diretor, ano){
        this.titulo = titulo
        this.diretor = diretor
        this.ano = ano
    }
     descrição(){
        document.write(this.titulo+"\n"+this.ano+"<br>"+"Um estudante do ensino médio órfão que vive com seu tio Ben e sua tia May. Peter Parker ("+this.diretor+") foi mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade de um aracnídeo. ")
     }
}
let atr = new Filme("Homem-Aranha","Tobey Maguire",2002)
atr.descrição()