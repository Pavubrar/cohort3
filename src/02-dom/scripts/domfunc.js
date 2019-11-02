
let count = 0;
const functions ={

addListItem: (list) => {
   let newLi = document.createElement("li");
      list.appendChild(newLi);
      newLi.appendChild(document.createTextNode("Item " + (list.childElementCount )));
},
//    newOl.appendChild(newLi);
//    newLi.textContent = `Item ${count++}`;
// },


//     li.appendChild(document.creatTextNode("Item" + (listParent.childElementCount + 1)));
//     listParent.appendChild(li);
 
 delListItem: (list)=> {
    //let list =document.getElementById("idlist");
    list.removeChild(list.children[0]);
    },
showListItem: (list) => {
   let i = 0;
   let childrenArr =[];
   let x;
   for (x of list.children)
   {
      childrenArr[i] = x.textContent; i++;
   }
  return childrenArr;
}
 };
export default functions;