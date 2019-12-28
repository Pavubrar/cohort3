import {Account, AccountController} from './account.js'

describe('Account testing', () => {
    test('deposit(value) add value to currentBalance', ()=> {
        const checkingAccount = new Account("checking Account, 100");
        checkingAccount.deposit(50);
        expect(checkingAccount.currentBlance).toEqual(150);
    });
    
});