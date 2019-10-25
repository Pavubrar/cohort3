import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

document.getElementById("btn-add").addEventListener("click", functions.onAddButtonClicked);
document.getElementById("btn-sub").addEventListener("click", functions.onSubButtonClicked);
document.getElementById("btn-mul").addEventListener("click", functions.onMulButtonClicked);
document.getElementById("btn-dvd").addEventListener("click", functions.onDvdButtonClicked);
document.getElementById("btn-calc-clear").addEventListener("click", functions.onClearCalcClicked);

document.getElementById("btn-tax").addEventListener("click", functions.onTaxButtonClicked);
document.getElementById("btn-arr-add").addEventListener("click", functions.onAddToArrayClicked);
document.getElementById("btn-arr-show").addEventListener("click", functions.onShowArrayClicked);
document.getElementById("btn-arr-total").addEventListener("click", functions.onTotalArrayClicked);
document.getElementById("btn-arr-clear").addEventListener("click", functions.onClearArrayClicked);

document.getElementById("btn-obj-lookup").addEventListener("click", functions.onObjLookupClicked);

onAddButtonClicked: () => {
    let addResult = functions.calculatorAdd(Number(inputOne.value), Number(inputTwo.value));
    calcDisplayElement.textContent = `the sum of ${inputOne.value} and ${inputTwo.value} is ${addResult}`;
    inputOne.value = "";
    inputTwo.value = "";
 },
  
onSubButtonClicked: () => {
    let subResult = functions.calculatorSub(Number(inputOne.value), Number(inputTwo.value));
    calcDisplayElement.textContent = `the difference between ${inputOne.value} and ${inputTwo.value} is ${subResult}`;
    inputOne.value = "";
    inputTwo.value = "";
 },
onMulButtonClicked: () => {
    let mulResult = functions.calculatorMul(Number(inputOne.value), Number(inputTwo.value));
    calcDisplayElement.textContent = `the product of ${inputOne.value} and ${inputTwo.value} is ${mulResult}`;
    inputOne.value = "";
    inputTwo.value = "";
 },
onDvdButtonClicked: () => {
    let dvdResult = functions.calculatorDvd(Number(inputOne.value), Number(inputTwo.value));
    calcDisplayElement.textContent = `the quotient of ${inputOne.value} and ${inputTwo.value} is ${dvdResult}`;
    inputOne.value = "";
    inputTwo.value = "";
 },
onClearCalcClicked: () => {
    let displayVal = "cleared...";
    calcDisplayElement.textContent = displayVal;
 },