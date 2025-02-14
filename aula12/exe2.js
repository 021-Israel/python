class Aluno{
    constructor(nome, idade, notas){
        this.nome = nome
        this.idade = idade
        this.notas = notas
    }
    calcularMedia(){
        let soma = 0 
        for(let i = 0;i<this.notas.length;i++){
            soma+= this.notas[i];
        }
        let media = soma/this.notas.length;
        document.write(`O aluno ${this.nome} tem ${this.idade} e a média de suas notas é : ${media.toFixed(1)} ${"<br>"}`)
        
    }

}
let aluno1 = new Aluno("Cauã", 20, [9.5, 5.8 ,7.0])
let aluno2 = new Aluno("Allan", 21, [7.5, 8.5, 9.0])
aluno1.calcularMedia();
aluno2.calcularMedia();