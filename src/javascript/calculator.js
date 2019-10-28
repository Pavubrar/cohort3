let inputOne = document.querySelector("#calc-input-1");
let inputTwo = document.querySelector("#calc-input-2");
let calcDisplayElement = document.getElementById("calc-display-val");
let calcClearBtn = document.getElementById("btn-calc-clear");

const calculator = {
    add: (num1,num2) => {
        return num1 + num2;
    },
    sub: (num1,num2) => {
        return num1 - num2;
    },
    mul: (num1,num2) => {
        return num1 * num2;
    },
    dvd: (num1,num2) => {
        return num1 / num2;
    },
};
function onAddButtonClicked() {
    let addResult = calculator.add(Number(inputOne.value), Number(inputTwo.value));
    document.getElementById("calc-siplay-val").textContent = `the sum of ${inputOne.value} is ${inputTwo.value} is ${addREsult}`;
    inputOne.value ="";
    inputTwo.value = "";
}
function onSubButtonClicked() {
    let subResult = calculator.sub(Number(inputOne.value), Number(inputTwo.value));
    document.getElementById("calc-siplay-val").textContent = `the difference between ${inputOne.value} is ${inputTwo.value} is ${addREsult}`;
    inputOne.value ="";
    inputTwo.value = "";
}
function onMulButtonClicked() {
    let mulResult = calculator.add(Number(inputOne.value), Number(inputTwo.value));
    document.getElementById("calc-siplay-val").textContent = `the product of ${inputOne.value} is ${inputTwo.value} is ${addREsult}`;
    inputOne.value ="";
    inputTwo.value = "";
}
function onDvdButtonClicked() {
    let dvdResult = calculator.add(Number(inputOne.value), Number(inputTwo.value));
    document.getElementById("calc-siplay-val").textContent = `the quotient of ${inputOne.value} is ${inputTwo.value} is ${addREsult}`;
    inputOne.value ="";
    inputTwo.value = "";
}

// comment this out to run javascript

calcClearBtn.onclick = () => {
    displayVal = "cleared...";
    calcDisplayElement.innerHTML= displayVal;
};

// comment this out to run javascript

document.getElementById("btn-add").addEventListener("click",onAddButtonClicked);
document.getElementById("btn-sub").addEventListener("click",onSubButtonClicked);
document.getElementById("btn-mul").addEventListener("click",onMulButtonClicked);
document.getElementById("btn-dvd").addEventListener("click",onDvdButtonClicked);


export default calculator;

