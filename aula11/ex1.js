//Exemplo com encapsulamento
class ContaBancaria{
    #saldo; // atributo privado
    constructor(titular, saldo){
        this.titular = titular;
        this.#saldo = saldo;
    } 
    depositar(valor){
        this.#saldo += valor;
        document.write("Deposito de R$: "+valor+ " realizado"+"<br>");
      }
      consultarSaldo(){
        document.write("Saldo atual R$: "+this.#saldo+"<br>");
      }
    sacar(valor){
        if(valor > this.#saldo){
          document.write("Saldo insuficiente para o titular "+this.titular+"<br>")   
        } else {
            this.#saldo -= valor;
            document.write("Saldo após o saque de R$ "+valor+"| R$"+this.#saldo+"<br>")
        }
       
    }    
    tranferir(valor, destinatario){
        if(valor > this.#saldo){
            document.write("Saldo insuficiente para o titular "+this.titular+"<br>");
        } else {
            this.#saldo -= valor;
            destinatario.#saldo += valor;
            document.write("Você transferiu R$:"+valor+" para o titular: "+destinatario.titular+"<br>");
        }
    }
}

let cliente1 = new ContaBancaria("Alan",1500);
let cliente2 = new ContaBancaria("Maria", 2000);
cliente1.consultarSaldo();
cliente2.consultarSaldo();
cliente1.tranferir(500, cliente2);
cliente1.sacar(500)

// let conta = new ContaBancaria("Maria",1500);
// document.write(conta.titular+"<br>")
// conta.depositar(500);
// conta.consultarSaldo()
