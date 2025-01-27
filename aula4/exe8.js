const idade = 17

switch(true) {
    case (idade >=18):
        console.log("Pode comprar bebidas")
        break
    case (idade >=17 && idade <=18 ):
        console.log("Se tiver acompanhado de um responsável legal")
        break
        case (idade < 17):
        console.log("Não comprar bebidas")    
        break
}