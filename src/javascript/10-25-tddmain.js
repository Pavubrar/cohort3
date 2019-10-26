import functions from "./10-25-tdd.js";


console.log("Hello World from 10-25-tddmain.js");
console.log("click selected");
iddoit.addEventListener("click", () => {
    let input1= Number(idinput1.value);
    let input2 = Number(idinput2.value);
    idanswer.value = functions.sum(input1,input2);
    //console.log(sum);
});