// Dio Banking

//name, acountNumber
//depositar, sacar

abstract class Account {
    name: string
    accountNumber: Number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('Voce sacou')
    }

    getBalance =() => {
        console.log(this.balance)
    }
}

class PeopleAcount extends Account {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }

}

const peopleAccount: PeopleAcount = new PeopleAcount (1, 'Donildo', 10)
console.log(peopleAccount)
