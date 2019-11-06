import functions from "./domfunc.js"


idContainer.addEventListener("click",(event)=>{
console.log(event.target);
}),
idAdd.addEventListener("click",function () {
    functions.addListItem(idlist);
}),
idDel.addEventListener("click",()=>{
    functions.delListItem(idlist);
}),
idShow.addEventListener("click", () => {
    
    //functions.showListItem(idlist)
    alert (functions.showListItem(idlist));
})
// let count = 0;
// idAddNewCard.addEventListener("click", ()=>{
//     //let numChild = idDiv1.childElementCount;
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute('count',count++)  ;
//     newDiv.setAttribute("class","div1")
//     newDiv.textContent = `card # ${count} ` ;

//     idDiv1.appendChild(newDiv);
// });