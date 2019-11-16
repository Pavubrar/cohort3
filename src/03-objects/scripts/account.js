class Account {
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
class AccountController {
    constructor(clientName,ClientDOB) {
        this.clientName = clientName;
        this.ClientDOB = ClientDOB;
        this.accountArray = [];
    }
    createAccount (accountType, initialBalance){
        let message;
        if(this.accountArray.filter((account) =>account.accountType === accountType).length === 0){
            let newAccount = new Account (accountType, initialBalance);
            this.accountArray.push(newAccount);
            message = `the new account(type:${accountType}), with initial balance of ${initialBalance}$ has been added`
        } else {
            message = `you already have an ${accountType}, please select different Account Type`
        }
        return message;
    }

    // getAccounts(){
    //     return this.accountArray;
    // }
    // getAccount(name){
    //     return this.accountArray.filter(account => account.accountType === accountType)[0];
    // }
    removeAccount (accountType){
        this.accountArray = this.accountArray.filter((account) => account.accountType !== accountType);
    }
    totalAccount (){
        const total= this.accountArray.reduce((accumulator, accountType) => accumulator + account.currentBlance,0);
        return total;
    }
    mostValuableAccount (){
        return this.accountArray.sort((a,b) => b.currentBlance - a.currentBlance)[0];
    }
    leastValuableaccount (){
        return this.accountArray.sort((a,b) => a.currentBlance - b.currentBlance)[0];
    }
}

export {Account, AccountController};