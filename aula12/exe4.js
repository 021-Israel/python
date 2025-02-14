class Produto{
    constructor(nome, preço){
        this.nome = nome
        this.preço = preço
    }
    desconto(valor){
        let porce = this.preço * valor/100
        document.write("Produto: "+this.nome+"<br>")
        document.write("O valor do produto é: R$ "+this.preço+"<br>")
        document.write("desconto de: "+valor+"%"+"<br>")
        document.write( `O valor com final com o desconto é de: R$ ${this.preço - porce}`)

    }
}
let prod = new Produto("mochila", 280)
prod.desconto(5)