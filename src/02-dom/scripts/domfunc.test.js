import functions from "./domfunc.js";

test(" tetsing add items in a list", () => {
  let testList = document.createElement("ol");
  // testList.setAttribute("id", "idlist")
  // let listforTesting = document.getElementById("idlist");
  //console.log(testList);
  // let count = testList.childElementCount;
  expect(testList.childElementCount).toEqual(0);
  functions.addListItem(testList);
  functions.addListItem(testList);
  functions.addListItem(testList);
  expect(testList.childElementCount).toEqual(3);
});
test("deleting an item from the list", () => {
  let testList1 = document.createElement("ol");
  functions.addListItem(testList1);
  expect(testList1.childElementCount).toEqual(1);
  functions.delListItem(testList1);
  expect(testList1.childElementCount).toEqual(0);
});
test("check the show item list", () => {
  let testList2 = document.createElement("ol");
  functions.addListItem(testList2);
  functions.showListItem(testList2);
  expect(functions.showListItem(testList2)).toBe("Item 1, ");
});
// CARDS
beforeEach(()=> {
  functions.cardNumber = 0;
})
test("creatListElement() creates a new card",()=>{
  const testDiv = document.createElement("div");
  functions.addCard(testDiv);
  expect(testDiv.children[0].id).toBe("card1");
  functions.addCard(testDiv);
  expect(testDiv.children[1].id).toBe("card2");
});
test('adding a card before selected card',() => {
  const testDiv = document.createElement("div");
    functions.addCard(testDiv);
    functions.addBefore(testDiv, testDiv.children[0]);
    expect(testDiv.children[0].id).toBe("card2");
    functions.addBefore(testDiv, testDiv.children[0]);
    expect(testDiv.children[0].id).toBe("card3");
    expect(testDiv.children[1].id).toBe("card2");
});
test('adding a card after selected card', () => {
  const testDiv = document.createElement("div");
  functions.addCard(testDiv);
  functions.addAfter(testDiv, testDiv.children[0]);
  expect(testDiv.children[1].id).toBe("card2");
  functions.addAfter(testDiv, testDiv.children[1]);
  expect(testDiv.children[2].id).toBe("card3");
  functions.addAfter(testDiv, testDiv.children[2]);
  expect(testDiv.children[3].id).toBe("card4");
});
test('deleting selected card', () => {
  const testDiv = document.createElement("div");
  functions.addCard(testDiv);
  expect(testDiv.children[0].id).toBe("card1");
  functions.deleteCard(testDiv.children[0]);
  expect(testDiv.children[0]).toBe(undefined);
});