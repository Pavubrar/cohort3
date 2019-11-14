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
    cardNumber: 0,

  addCard(target){
    this.cardNumber++;
    const cardTemplate = document.createElement("div");
      cardTemplate.id = `card${this.cardNumber}`;
      cardTemplate.classList.add("card");
    const h3 = document.createElement("h3");
      h3.innerText =`Card${this.cardNumber}`;
      cardTemplate.appendChild(h3);
    const addBeforeButton = document.createElement("button");
      addBeforeButton.id =`add-before-button${this.cardNumber}`;
      addBeforeButton.innerText = "Add Before";
      cardTemplate.appendChild(addBeforeButton);
    const addAfterButton = document.createElement("button");
      addAfterButton.id =`add-after-button${this.cardNumber}`;
      addAfterButton.innerText = "Add After";
      cardTemplate.appendChild(addAfterButton);
    const addDeleteButton  = document.createElement("button");
      addDeleteButton.id = `add-del-button${this.cardNumber}`;
      addDeleteButton.innerText = "Delete";
      cardTemplate.appendChild(addDeleteButton);
    target.appendChild(cardTemplate);
    return cardTemplate;
  },
  addBefore(target, card) {
    target.insertBefore(this.addCard(target),card);
  },
  addAfter(target, card){
    target.insertBefore(this.addCard(target),card.nextSibling);
  },
  deleteCard(card){
    card.remove();
  }
}; 

export default functions;
