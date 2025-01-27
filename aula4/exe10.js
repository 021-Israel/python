const idade = 45

switch(true) {
    case(idade >=16):
        console.log("Pode Vota, porém não poderá dirigir!")
        break
    case(idade >=18):
        console.log("Pode dirigir e pode votar!")
    case(idade <16):
    console.log("Não poderá dirigir e nem votar!")

}