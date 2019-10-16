import functions from './calculation'



test('Check results', () => {
    expect(functions.("a","a")).toBe("true"); // Consider the edge cases
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