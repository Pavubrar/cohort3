import functions from"./domfunc.js"

 const newOl = document.createElement("ol");
 test('adding items to the list',() => {
     expect(newOl.childElementCount).toBe(0);
 });
test('add elem to list',()=>{
    functions.addListItem(newOl)
    expect(newOl.childElementCount).toBe(1);
});
test('add text content to item 1',()=>{

    expect(newOl.children[0].textContent).toBe("item 1");
});
