let usuario =[]
for(let i=0; i<3;i++) {
    let nomes = prompt(`Digite o ${i + 1}º nome: `);
    usuario.push(nomes);
}
let nomesA = nomes.sort(...usuario);

console.log("Os nomes são: "+nomesA);