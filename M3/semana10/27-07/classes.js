class Conta{


    constructor(cliente, agencia){
        this._cliente = cliente,
        this._agencia = agencia,
        this._saldo = 0
       
    }

    Sacar(valor){
        if(valor < this._saldo){
            this._saldo -= valor
            return 'você sacou R$' + valor
        }else{
            return 'Saldo insuficiente'
        }
    }

    Depositar(valor){
        this._saldo += valor
        return 'você depositou R$' + valor
    }



}

class ContaCorrente extends Conta{

    constructor(cliente, agencia, ncc){
        super(cliente, agencia)
        this._ncc = ncc //numero de conta corrente

    }

   

}


class Cliente{

    constructor(nome, cpf){
        this._nome = nome,
        this._cpf = cpf
    }
}


const joao = new Cliente('João Almeida', '11122233344')

const conta001 = new ContaCorrente(joao, 0001, 12345 )

console.log(conta001)

console.log(conta001.Depositar(200))

console.log(conta001)

console.log(conta001.Sacar(50))

console.log(conta001)

console.log(conta001.Sacar(200))

console.log(conta001)




















class contaPoupança{

    constructor(cliente, agencia, ncp){
        this._cliente = cliente,
        this._agencia = agencia,
        this._saldo = saldo,
        this._ncp = ncp //numero de conta Poupança

    }


}