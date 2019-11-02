import functions from "./1functions.js";
btn.addEventListener("click", ()=>{
    functions.test();       
});
idDiv1.addEventListener("click",()=>{
    console.log(event.target);
    console.log("count of Div" + event.target.getAttribute("count"));
    console.log("this is parent div " + event.target.parentNode);
    console.log("this is child div " + event.target.parentNode.children);
});
let count = 0;
btn1.addEventListener("click", ()=>{
    //let numChild = idDiv1.childElementCount;
    let newDiv = document.createElement("div");  
    newDiv.setAttribute('count',count++)  ;
    newDiv.setAttribute("class","div1")   
    newDiv.textContent = `card # ${count} ` ;     

    idDiv1.appendChild(newDiv);       
});
btn2.addEventListener("click", ()=>{
    let newCard = functions.creatCard(); 
    newCard.setAttribute("class","div1")  ;  
    idDiv1.appendChild(newCard) ;     

});