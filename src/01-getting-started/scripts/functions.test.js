import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test("testing calculator function", () => {
	expect(functions.calculatorAdd(30, 10)).toBe(40);
	expect(functions.calculatorSub(30, 10)).toBe(20);
	expect(functions.calculatorMul(10, 5)).toBe(50);
    expect(functions.calculatorDvd(10, 5)).toBe(2);
   
});

test("testing tax calc", () => {
	expect(functions.taxes(1)).toEqual(0.15);
	expect(functions.taxes(2)).toEqual(0.3);
	expect(functions.taxes(50000)).toEqual(7630.35);
	expect(functions.taxes(100000)).toEqual(18141.1);
	expect(functions.taxes(150000)).toEqual(31211.1);
	expect(functions.taxes(250000)).toEqual(61796.25);
});

test("testing array functions", () => {
	expect(functions.arrayAdd(30)).toBe("30 was added to your array");
	expect(functions.arrayShow([10, 20, 30])).toBe("10,20,30");
	expect(functions.arrayTotal([10, 20, 30])).toBe("60");
	expect(functions.arrayClear([10, 20, 30])).toBeNull();
});

test("testing object functions", () => {
	expect(functions.canadaProv("mb")).toBe("Manitoba");
	expect(functions.canadaProv("yt")).toBe("Yukon");
	expect(functions.canadaProv("ns")).toBe("Nova Scotia");
	expect(functions.canadaProv("n5")).toBe("n5 is not a province");
});

