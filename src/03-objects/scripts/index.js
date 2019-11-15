import { Account, AccountController } from "./account.js";
import domfuncs from "./domfunc.js"

let Person = new AccountController ("Person", "1986.07.18");
    
    idLeftSide.addEventListener("click", () => {
        if (event.toElement.className === "addNew"){
        let  newAccountType = input1.value;
        let newInitialBalance = Number(input2.value);
        if (newAccountType !="" && newInitialBalance != ""){
            let message = person.addNewAccount(newAccountType, newInitialBalance);
            domfuncs.addNew(idLeftSide, newAccountType);
            input1.value = "";
            input2.value = "";
            display.textContent = message;
            input1.focus();
            if (Person.Accounts.length === 2) {
                domfuncs.addExtra(idLeftSide);
            };
        };
        };
    });    
