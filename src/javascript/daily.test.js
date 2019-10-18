import functions from './daily'
// OCT 15-16 2019
test('sort numbers in ascending order', () => {
    expect(functions.sortAscending([40,20,35,3])).toEqual([3,20,35,40]); // Consider the edge cases
});
test('sort number in descending order' , () => {
    expect(functions.sortDescending([40,20,35,3])).toEqual([40,35,20,3]);
});
test('filter number >2', () => {
    expect(functions.filterFunction([1,2,3,4])).toEqual([3,4]);
});
test('add all the elems in one array', () => {
    expect(functions.reduceFunction([1,3,6])).toBe(10);
});
test('elem value increased 5 times',() =>{
    expect(functions.mapFunction([2,4,6])).toEqual([10,20,30]); // Consider the edge cases
});
test('slice', () => {    
    expect(functions.sliceFunction([1,2,3])).toEqual([2,3]);
    expect(functions.sliceFunction(["grapes","apple","kiwi"])).toEqual(["apple","kiwi"]);
});
test('splice', () => {    
    expect(functions.spliceFunction([1,2,3])).toEqual([1,"splice",2,3]);
    expect(functions.spliceFunction(["apple","kiwi"])).toEqual(["apple","splice","kiwi"]);
});
test('foreach', () =>{
   expect(functions.forEachFunction([1,2,3])).toEqual([1,2,3]);
   expect(functions.forEachFunction(["grapes","apple","kiwi"])).toEqual(["grapes","apple","kiwi"]);
});  
test('forin',()=>{ 
    expect(functions.forInLoop({a: "first", b:"second", c:"third"})).toEqual(["first","second","third"]);
     });
test('forof',()=>{ 
    expect(functions.forOfLoop([1,2,3])).toEqual([1,2,3]);
    expect(functions.forOfLoop(["grapes","apple","kiwi"])).toEqual(["grapes","apple","kiwi"]);
 });
      
test('dowhile',()=>{ 
    expect(functions.doWhile(5)).toEqual([1,2,3,4,5]);
     });
 
test('while',()=>{ 
    expect(functions.whileLoop("parveen")).toBe("neevrap");
}); 
test('forloop',()=>{ 
    expect(functions.basicForLoop(0,5)).toBe(15);
    expect(functions.basicForLoop(0,10)).toBe(55);
 });

// OCT 11 2019
test('email builder from an object/map', () => {
    const name = {fname: "first", lname:"last"};
    expect(functions.makeEmailObject(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObject({fname: "First", lname:"Last"})).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObject({fname: "Bill", lname:"Smith"})).toEqual("bill.smith@evolveu.ca");
});



test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
});
//OCt 7
test('Check 2 parameters', () => {
    expect(functions.assertEqual("a","a")).toBe("true"); // Consider the edge cases
    expect(functions.assertEqual("a","b")).toBe("false");
    expect(functions.assertEqual(1,2)).toBe("false");
    expect(functions.assertEqual(2,2)).toBe("true");
    expect(functions.assertEqual("2",2)).toBe("false");
    expect(functions.assertEqual("This value","This value")).toBe("true");
});



