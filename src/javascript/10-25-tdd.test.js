/* 1.write the stub (method name, parms, dummy return)
 2.write a min code to pass
 3.write the minimun code to get the tests to pass
 4.another test
 5.fail
 6.write code
 7.continue
 8.refactor/repeat for all the functionality you need 
  a stub has  function name, parameters, return dummy*/
import functions from "./10-25-tdd";

//  Working with Arrays

test('Does the addElement function work?', () => {
    expect(functions.addElement([1, 2], 3)).toStrictEqual([1, 2, 3]);
    expect(functions.addElement([], -99)).toStrictEqual([-99]);
});

test('Does the totalArr function work?', () => {
    expect(functions.totalArr([1, 2, 3])).toBe(6);
    expect(functions.totalArr([0, -99, 1.56])).toBe(-97.44);
    expect(functions.totalArr(["1", "2", "3"])).toBe(6);
});

test('Does the clearArr function work?', () => {
    expect(functions.clearArr([1, 2, 3])).toStrictEqual([]);
    expect(functions.clearArr([0, -99, 1.56])).toStrictEqual([]);
    expect(functions.clearArr(["1", "2", "3"])).toStrictEqual([]);
});

//-- canadian Taxes--
test("testing tax calc", () => {
	expect(functions.taxes(1)).toEqual(0.15);
    expect(functions.taxes(2)).toEqual(0.3);
    expect(functions.taxes(50000)).toEqual(7630.85)
    expect(functions.taxes(100000)).toEqual(18140.66)
    expect(functions.taxes(150000)).toEqual(31211.57)
    expect(functions.taxes(250000)).toEqual(61796.57)
});

// --- Calculator--
test ('hello world',() =>{
    console.log ("Hello World from test");

});
 test ('chech the sum',() =>{
     expect (functions.sum(1,2)).toBe(3);
 });
 test ('chech the sub',() =>{
    expect (functions.sub(4,3)).toBe(1);
});
test ('chech the multiplication',() =>{
    expect (functions.mul(1,2)).toBe(2);
});
test ('chech the division',() =>{
    expect (functions.dvd(4,2)).toBe(2);
});
test('Does the lookUp function work?', () => {
    let dict = {
        ab: "Alberta",
        bc: "British Columbia",
        mb: "Manitoba",
        nb: "New Brunswick",
        nl: "Newfoundland and Labrador",
        ns: "Nova Scotia",
        nt: "Northwest Territories",
        nu: "Nunavut",
        on: "Ontario",
        pe: "Prince Edward Island",
        qc: "Quebec",
        sk: "Saskatchewan",
        yt: "Yukon",
    }
    expect(functions.lookUp("ab")).toBe("Alberta");
    expect(functions.lookUp("")).toBe(undefined);
    expect(functions.lookUp("yt")).toBe("Yukon");
    expect(functions.lookUp("on")).toBe("Ontario");
});