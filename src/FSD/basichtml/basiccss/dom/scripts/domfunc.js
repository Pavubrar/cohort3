
let count = 4;
const functions ={

addListItem: (newOl) => {
   let newLi = document.createElement("li");
   newOl.appendChild(newLi);
   newLi.textContent = `Item ${count++}`;


//     li.appendChild(document.creatTextNode("Item" + (listParent.childElementCount + 1)));
//     listParent.appendChild(li);
 },
 };
export default functions;