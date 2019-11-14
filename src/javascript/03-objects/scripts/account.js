export class Account {
    constructor(name, initialBalance){
        this.name = name;
        this.currentBlance = Number(initialBalance);
    }
    deposit(value) {
        this.currentBlance += value;
    }
    withdraw(value) {
        this.currentBlance -= value;
    }
    balance() {
        return this.currentBlance;
    }
}
export class AccountController {
    constructor() {
        this.accountArray = [];
    }
    createAccount(name, initialBalance){
this.accountArray.push(new Account(name, initialBalance));
    }

    getAccounts(){
        return this.accountArray;
    }
    getAccount(name){
        return this.accountArray.filter(account => account.name === name)[0];
    }
    removeAccount(name){
        this.accountArray = this.accountArray.filter(account => account.name !== name);
    }
    totalAccount(){
        const total= this.accountArray.reduce((accumulator, account) => accumulator + account.currentBlance,0);
        return total;
    }
    mostValuableAccount(){
        return this.accountArray.sort((a,b) => b.currentBlance - a.currentBlance)[0];
    }
    leastValuableaccount(){
        return this.accountArray.sort((a,b) => a.currentBlance - b.currentBlance)[0];
    }
}
