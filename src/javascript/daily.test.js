import functions from './daily'
  

test('email builder from an object/map', () => {
    const name = {fname: "first", lname:"last"};
    expect(functions.makeEmailObject(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObject({fname: "First", lname:"Last"})).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObject({fname: "Bill", lname:"Smith"})).toEqual("bill.smith@evolveu.ca");
});


test('Check 2 parameters', () => {
    expect(functions.assertEqual("a","a")).toBe("true"); // Consider the edge cases
    expect(functions.assertEqual("a","b")).toBe("false");
    expect(functions.assertEqual(1,2)).toBe("false");
    expect(functions.assertEqual(2,2)).toBe("true");
    expect(functions.assertEqual("2",2)).toBe("false");
    expect(functions.assertEqual("This value","This value")).toBe("true");
});
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
});

test('Check 2 parameters', () => {
    expect(functions.assertEqual("a","a")).toBe("true"); // Consider the edge cases
    expect(functions.assertEqual("a","b")).toBe("false");
    expect(functions.assertEqual(1,2)).toBe("false");
    expect(functions.assertEqual(2,2)).toBe("true");
    expect(functions.assertEqual("2",2)).toBe("false");
    expect(functions.assertEqual("This value","This value")).toBe("true");
});



