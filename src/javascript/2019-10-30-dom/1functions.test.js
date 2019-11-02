
import functions from "./1functions.js";


// test('check for output' , () =>{
//     console.log("Hello from functions.test");
//     functions.test();
// });
// test('check the card is created', () =>{
// const div = functions.creatCard();
// expect(div.textContent).toEqual("card # 1");
// });
// test('check the count', () =>{
//     const div = functions.creatCard();
//     const x = div.getAttribute("count")
//     //expect(x).toBe("0");
//     expect(div.textContent).toEqual("card # 2");

//     const div2 = functions.creatCard(); 
//     expect(div2.getAttribute("count")).toBe("3");
//     expect(div2.textContent).toBe("card # 3");  
//  });
   let groupDiv = document.createElement("div");
 test('check groupdiv is empty', ()=>{
     expect(groupDiv.childElementCount).toBe(0);
     //expect(functions.addCard(groupDiv)).toBe(1);
 });
 test('check groupdiv has one child', ()=>{
    //  console.log(groupDiv);
     functions.creatCard(groupDiv);
    expect(groupDiv.childElementCount).toBe(1);
    //expect(functions.addCard(groupDiv)).toBe(1);
});