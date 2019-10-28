import functions from "./10-25-tdd.js";

console.log("Hello World from 10-25-tddmain.js");
console.log("click selected");

idSum.addEventListener("click", () => {
    let input1= Number(idinput1.value);
    let input2 = Number(idinput2.value);
    idAnswer.value = functions.sum(input1,input2);
});
idSub.addEventListener("click", () => {
    let input1= Number(idinput1.value);
    let input2 = Number(idinput2.value);
    idAnswer.value = functions.sub(input1,input2);
});
idMul.addEventListener("click", () => {
    let input1= Number(idinput1.value);
    let input2 = Number(idinput2.value);
    idAnswer.value = functions.mul(input1,input2);
});
idDvd.addEventListener("click", () => {
    let input1= Number(idinput1.value);
    let input2 = Number(idinput2.value);
    idAnswer.value = functions.dvd(input1,input2);
});
// ----Taxes----
idTaxCalc.addEventListener("click", ()=>{
    idTax.textContent = "$" + functions.taxes(idIncome.value);
});
//---Working with arrays---
let currentArray = [];
idAdd.addEventListener('click',() => {
    if (isNaN(idElementInput.value)|| idElementInput.value ===""){
    idMessageArea.textContent = "Please enter a valid number";
    } else {
        functions.addElement(currentArray, idElementInput.value);
        idMessageArea.textContent = idElementInput.value  +  "  added to the array";
    }
});
idShow.addEventListener('click',() => {
    idMessageArea.textContent = "Array state: " + currentArray.toString();
});
idTotal.addEventListener('click', () => {
    idMessageArea.textContent = "Total: " + functions.totalArr(currentArray);
});
 idClear.addEventListener('click', () => {
     functions.clearArr(currentArray);
     idMessageArea.textContent = "Array cleared";
 });
