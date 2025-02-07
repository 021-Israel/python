// função math.floor()
//arrendonda um número para baixo. Exemplos
console.log ("*** Números com floor ***");
console.log(Math.floor(4.9));//4
console.log(Math.floor(2.3));//2

// função Math.random()
// gera números aleatórios 
console.log(" *** Número aleatórios ***");
// Entre 0 e 1, onde 0 incluso e 1 excluso
console.log(Math.random());
console.log(Math.floor(Math.random()*11));
// Entre 1 e 6
console.log(Math.floor(Math.random()*6)+1)

// Função Math.ceil() arredonda para cima
console.log("*** numeros com ceil ***");
console.log(Math.ceil(3.2)); // 4
let preco = 10.25;
console.log(Math.ceil(preco)); // 11

// função Math.round() arredondamento normal
console.log("*** Números com round ***")
console.log(Math.round(4,4));
console.log(Math.round(4.7));
let media = 7.6;
console.log(Math.round(media));

// função Math.max() e Math.min()
console.log("*** Números max e min ***")
console.log(Math.max(10, 20, 5, 30));
console.log(Math.min(10, 20, 5, 30));

// Função Math.max() e Math.Min()
console.log("*** Número Max e Min ***");
console.log(Math.max(10, 20, 5, 30));
console.log(Math.min(10, 20, 5, 30));

// Função Math.pow() = potência
console.log(Math.pow(2,3)); // 2³
let lado = 4;
let area = Math.pow(lado,2);
console.log("A area do quadrado: "+area);

// Função Math.sqrt() = raiz quadrada
console.log("*** Números sqrt ***")
console.log(Math.sqrt(25));
console.log(Math.sqrt(9));