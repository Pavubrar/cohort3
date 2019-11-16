import { Account, AccountController } from "./account.js";
import domfuncs from "./domfunc.js"

let Person = new AccountController ("Person", "1986.07.18");
    
    idLeftSide.addEventListener("click", () => {
        //console.log(event);
        if (event.target.className === "addnew"){
            let  newAccountType = input1.value;
            let newInitialBalance = Number(input2.value);
            if (newAccountType !="" && newInitialBalance != ""){
                //console.log(newAccountType);
                let message = Person.createAccount(newAccountType, newInitialBalance);
                domfuncs.addNew(idLeftSide, newAccountType);
                input1.value = "";
                input2.value = "";
                display.textContent = message;
                input1.focus();
                if (Person.accountArray.length === 2) {
                   domfuncs.addExtra(idLeftSide);
            };
        };
    };
    if(event.target.className ==="deposit") {
        let currentAccount = event.target.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            let currentAccountIndex = Person.accountArray.findIndex((account) =>account.name === currentAccountType);
            Person.accountArray[currentAccountIndex].deposit(amount);
            currentAccount.children[1].value="";
            display.textContent = `${amount}$ has been deposited to your ${Person.accountArray[currentAccountIndex].accountType}` 
        };
    };
 if(event.target.className === "withdraw"){
    let currentAccount = event.target.parentElement;
    let amount = Number(currentAccount.children[1].value);
    if (amount > 0) {
        let currentAccountType = currentAccount.children[0].textContent;
        let currentAccountIndex = Person.accountArray.findIndex((account) =>account.name === currentAccountType);
        Person.accountArray[currentAccountIndex].withdraw(amount);
        currentAccount.children[1].value="";
        display.textContent = `${amount}$ has been withdrawn from your ${Person.accountArray[currentAccountIndex].accountType}` 
    };
 };
 if(event.target.className === "balance"){
    let currentAccount = event.target.parentElement;
    let currentAccountType = currentAccount.children[0].textContent;
    let currentAccountIndex = Person.accountArray.findIndex((account) =>account.name === currentAccountType);
    let message = Person.accountArray[currentAccountIndex].balance();
        currentAccount.children[1].value="";
        display.textContent = message ;
    };
    if (event.target.className === "delete") {
        let currentAccount = event.target.parentElement;
        let currentAccountType = currentAccount.children[0].textContent;
        Person.removeAccount(currentAccountType);
        currentAccount.children[1].value = "";
        display.textContent = `Your ${currentAccountType} has been closed`;
        domfuncs.delete(currentAccount, idLeftSide);
        if (Person.accountArray.length > 1) {
            domfuncs.deleteExtra(idleftSide);
        };
    }
//     if (event.target.className === "highestBalance") {
//         let highestBalanceAccount = Person.highestBalance();
//         display.textContent = `Your ${highestBalanceAccount.accountType} has the highest balance, ${highestBalanceAccount.balance}$`
//         };
//     if (event.target.className === "lowestBalance") {
//         let lowestBalanceAccount = Person.lowestBalance();
//         display.textContent = `Your ${lowestBalanceAccount.accountType} has the lowests balance, ${lowestBalanceAccount.balance}$`
//         };
//     if (event.toElement.className === "totalBalance") {
//         let totalBalance = Person.totalBalance();
//         display.textContent = `The total balance of all of your accounts is ${totalBalance}$`
//         };
// });
// input2.addEventListener("keypress", (event) => {
//     if (event.which === 13) {
//         let newAccountType = input1.value;
//         let newAccountBalance = Number(input2.value);
//         if (newAccountType !="" && newAccountBalance != "") {
//             let message = Mason.addNewAccount(newAccountType, newAccountBalance);
//             operations.addNew(idLftSide, newAccountType);
//             input1.value = "";
//             input2.value = "";
//             display.textContent = message;
//             input1.focus();
//             if (Person.accountArray.length === 2) {
//                 domfuncs.addExtra(idLeftSide);
//             };
//         };
//     };
});    
