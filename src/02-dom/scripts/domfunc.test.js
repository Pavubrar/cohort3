import functions from"./domfunc.js"

 const newOl = document.createElement("ol");
 test('chekin items in the list',() => {
     expect(newOl.childElementCount).toBe(0);
 });
test('add elem to list',()=>{
    functions.addListItem(newOl)
    expect(newOl.childElementCount).toBe(1);
});

test('add text content to item 1',()=>{
   // let myList = document.getElementById('idList');
    let listCount = newOl.childElementCount

    functions.addListItem(newOl);
    expect(newOl.childElementCount).toEqual(listCount + 1);
});
//     let List = document.getElementById('idList');
//     let Count = List.childElementCount
//     functions.createListElement();
//     expect(jestList.childElementCount).toEqual(listCount + 1);
// });

//     expect(newOl.children[0].textContent).toBe("Item 1");
// });

test('del elem from list',()=>{
    functions.delListItem(newOl)
    expect(newOl.children.length).toBe(1)
});
test('show elem of list',()=>{
    //let newOl = document.getElementById("idlist");
    // functions.addListItem(newOl)
    // functions.addListItem(newOl)
    expect(functions.showListItem(newOl)).toEqual(["Item 3"]);
});

    
