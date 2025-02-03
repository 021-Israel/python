// let times = []; //criando array
// let time;

// let vasco = 0;
// let flamengo = 0;
// let fluminense = 0;
// let botafogo = 0;
// let outroTime = 0;


// for (let i = 0; i < 10; i++) {
//     time = prompt("Qual o seu time?").toLowerCase(); // o que será digitado sairá minúsculo
//     times.push(time);
// }

// for(let i = 0; i < 10; i++) {
//     switch (times  [i]) {
//         case "flamengo":
//             flamengo++;
//             break;
//         case "fluminense":
//             fluminense++;
//             break;
//         case "vasco":
//             vasco++;
//             break;
//         case "botafogo":
//             botafogo++;
//             break;
//         default: 
//         outroTime++;
//         break;
                    
//     }
        
// }
// document.write("Flamengo..: "+flamengo+"<br>")
// document.write("Fluminense: "+fluminense+"<br>")
// document.write("Vasco.....: "+vasco+"<br>")
// document.write("Botafogo..: "+botafogo+"<br>")
// document.write("Outro time...: "+outroTime+"<br>")

let time = "";
let vasco = 0;
let flamengo = 0;
let fluminense = 0;
let botafogo = 0;
let outroTime = 0;

for (let i = 3; i > 0; i--) {
    time = prompt("Qual o seu time?").toLowerCase(); // o que será digitado sairá minúsculo
    if (time == "botafogo") {
        botafogo++;
    } else if (time == "flamengo") {
        flamengo++;
    }else if (time == "fluminense") {
        fluminense++;
    }else if (time == "vasco") {
        vasco++;
    }else{
        outroTime++;
    }
}

document.write(`
Torcedores do Botafogo: ${botafogo}.<br>
Torcedores do Vasco: ${vasco}.<br>
Torcedores do Flamengo: ${flamengo}.<br>
Torcedores do Tricolor: ${fluminense}.<br>
Outros times: ${outroTime}.<br>`);