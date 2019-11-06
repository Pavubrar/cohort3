let count =0;
const functions = {
    test: () => {
        console.log("Hello from functions test");
    },
   
    addListItem: list => {
        let newLi = document.createElement("li");
        list.appendChild(newLi);
        newLi.appendChild(
          document.createTextNode("Item " + list.childElementCount)
        );
      },
      //    newOl.appendChild(newLi);
      //    newLi.textContent = `Item ${count++}`;
      // },
    
      //     li.appendChild(document.creatTextNode("Item" + (listParent.childElementCount + 1)));
      //     listParent.appendChild(li);
    
      delListItem: list => {
        //let list =document.getElementById("idlist");
        list.removeChild(list.children[0]);
      },
      showListItem: list => {
        let i = 0;
        let childrenArr = [];
        let x;
        for (x of list.children) {
          childrenArr[i] = x.textContent;
          i++;
        }
        return childrenArr;
      },
      count: 0,
    creatCard: (node) => {
        functions.count++;
        let newDiv = document.createElement("div");
        newDiv.className = "div1";
        newDiv.setAttribute("count", functions.count);
        newDiv.textContent = `card # ${functions.count}`;
        node.appendChild(newDiv);

        return newDiv;
    },
    addCard: () => {

        return;
    }
};

export default functions;