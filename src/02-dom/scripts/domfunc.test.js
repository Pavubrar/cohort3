import functions from "./domfunc.js";

test(" tetsing add items in a list", () => {
  let testList = document.createElement("ol");
  // testList.setAttribute("id", "idlist")
  // let listforTesting = document.getElementById("idlist");
  console.log(testList);
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
  expect(functions.showListItem(testList2)).toBe("Item 1");
});
