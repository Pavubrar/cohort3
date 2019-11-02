import functions from "./domfunc.js"


idContainer.addEventListener("click",(event)=>{
console.log(event.target);
});
idAdd.addEventListener("click",function () {
    functions.addListItem(idlist);
});
idDel.addEventListener("click",()=>{
    functions.delListItem(idlist);
});
idShow.addEventListener("click", () => {
    
    //functions.showListItem(idlist);
    alert (functions.showListItem(idlist));
})
