import {dis,solve,clr} from './cal'



test('Check results', () => {
    expect(dis(4)).toBe(4); // Consider the edge cases
    expect(functions.assertEqual("a","b")).toBe("false");
    expect(functions.assertEqual(1,2)).toBe("false");
    expect(functions.assertEqual(2,2)).toBe("true");
    expect(functions.assertEqual("2",2)).toBe("false");
    expect(functions.assertEqual("This value","This value")).toBe("true");
});
