import functions from"./domfunc.js"

idContainer.addEventListener("click",(event)=>{
console.log(event.target);
});
idAdd.addEventListener("click",function () {
    functions.addListItem(idlist);
});

