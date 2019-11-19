import { Account, AccountController } from "./account.js";


describe('Account Testing', () => {
    const checkingAccount = new Account("checking Account",100);
test('account properties', () => {
    expect(checkingAccount.accountType).toEqual("checking Account");
    expect(checkingAccount.currentBlance).toEqual(100);
});
test('deposit(value) addition to current balance',() => {
    checkingAccount.deposit(30);
    expect(checkingAccount.currentBlance).toEqual(130);
});
test('check the balance after withdraw', () => {
    checkingAccount.withdraw(10);
    expect(checkingAccount.currentBlance).toEqual(120);

});
test('check the balance ', () => {
    checkingAccount.balance();
    expect(checkingAccount.currentBlance).toEqual(120);
});

});
describe('Account Testing', () => {
    const myAccount = new AccountController("checking Account",100);
test("check account controller", () => {
    myAccount.createAccount("Savings", 500);
    expect(myAccount.accountArray.length).toEqual(1);
    myAccount.createAccount("ESP", 200);
    expect(myAccount.accountArray.length).toEqual(2);
    myAccount.createAccount("RSP",200);
    expect(myAccount.accountArray[2].accountType).toEqual("RSP");
    expect(myAccount.accountArray.length).toEqual(3);
    myAccount.createAccount("checking", 1000);
    //expect(myAccount.getAccounts()).toEqual([{"currentBlance": 500, "name": "Savings"}, {"currentBlance": 200, "name": "ESP"}, {"currentBlance": 200, "name": "RSP"}, {"currentBlance": 1000, "name": "checking"}]);
    expect(myAccount.accountArray.length).toEqual(4);
    myAccount.createAccount("Study plan", 2000);
    expect(myAccount.accountArray.length).toEqual(5);
    console.log(myAccount);
    expect(myAccount.totalAccount()).toEqual(3900);
    expect(myAccount.mostValuableAccount()).toEqual( {"currentBlance": 2000, "accountType": "Study plan"});
    expect(myAccount.leastValuableaccount()).toEqual({"currentBlance": 200, "accountType": "ESP"});
//});
    //test('getAccount(name) returns account by name', () => {
    //const myAccount = new AccountController("RSP",200);
    expect(myAccount.getAccount("RSP")).toEqual({"currentBlance": 200, "accountType": "RSP"});
    expect(myAccount.getAccount("Non-existent Account")).toEqual(undefined);
    expect(myAccount.getAccount("")).toEqual(undefined);
    
//});
//test('removeAccount() removes account of that name', () => {
    //const myAccount = new AccountController("Savings",500);
    const accountCount = myAccount.getAccounts().length
    myAccount.removeAccount("Savings");
    expect(myAccount.getAccounts().length).toEqual(accountCount - 1);
    //expect(myAccount.getAccounts()).toEqual([{"currentBlance": 500, "accountType": "Savings",}]);
         
});
});

