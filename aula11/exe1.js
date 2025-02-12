class Moto{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exiba(){
        document.write("A marca da moto é "+this.marca+" o modelo da moto é " +this.modelo+ " e a ano dela é "+this.ano)
    }
}

let minhaMoto = new Moto ("Honda","XRE 300", "2025");
minhaMoto.exiba();