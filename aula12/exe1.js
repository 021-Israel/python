class Livro{
    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
        exibirDetalhe(){
        document.write("O livro: "+this.titulo+" foi escrito por "+this.autor+" e teve sua publicação em "+this.anoPublicacao)

    }



}
let livraria = new Livro("O Pequeno Prícipe", "Antoine de Saint-Exupéry",1943)
livraria.exibirDetalhe()