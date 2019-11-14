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
const leftPanel = document.getElementById("idLeftPanel");

leftPanel.addEventListener("click", () => {
    switch(event.target.innerText) {
        case 'Add New Card':
            functions.addCard(leftPanel);
            break;
        case 'Add Before':
            functions.addBefore(leftPanel, event.target.parentElement);
            break;
        case 'Add After':
            functions.addAfter(leftPanel, event.target.parentElement);
            break;
        case 'Delete':
            functions.deleteCard(event.target.parentElement);
            break;
    }
});

