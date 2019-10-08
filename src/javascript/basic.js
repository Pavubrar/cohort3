console.log("Hello World from basic.js")
var num = document.getElementById("input1");

var button1 = document.getElementById("button1");
button1.addEventListener("click", function onButtonClicked(){
    console.log("I'me in the button click event");
    size(parseInt(num.value));
    console.log(parseInt(input1.value)+1);
})

function size(num) {
    if (num <10) {
         return console.log( "small");
    } else if(num < 20) {
         return console.log("medium");
    } else {
         return console.log ("Large");
       }
    }



