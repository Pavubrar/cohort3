console.log("Hello World from basic.js")

var button1 = document.getElementById("button1");
button1.addEventListener("click", function onButtonClicked(){
    console.log("I'me in the button click event");
    console.log(parseInt(input1.value)+1);
})
const functions ={
size:(num) =>{
    if (num <10) return "small";
    if(num < 20) return "medium";
    if(num > 20) return "Large";
    if(num > 100) return "Big";
    console.log(size);
    size();
}

}
