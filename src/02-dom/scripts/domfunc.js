let count = 0;
const functions = {
  addListItem: listParent => {
    let newLi = document.createElement("li");
    newLi.appendChild(
      document.createTextNode("Item " + (listParent.childElementCount + 1))
    );
    listParent.appendChild(newLi);
  },

  delListItem: listParent => {
    let listOfItems = listParent.children;
    console.log(listParent);
    let lastItem = listOfItems[listOfItems.length - 1];
    lastItem.parentNode.removeChild(lastItem);
  },

  showListItem: listParent => {
    let listOfItems = listParent.children;
    let txt = "";
    // console.log(listParent)
    for (var i = 0; i < listOfItems.length; i++) {
      txt += listOfItems[i].textContent + ", ";
    }
    return txt;
  },

  //--- Working With Cards---
  creatCard: node => {
    functions.count++;
    let newDiv = document.createElement("div");
    newDiv.className = "div1";
    newDiv.setAttribute("count", functions.count);
    newDiv.textContent = `card # ${functions.count}`;
    node.appendChild(newDiv);

    return newDiv;
  }
};

export default functions;
