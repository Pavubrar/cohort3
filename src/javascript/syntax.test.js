import functions from './syntax'

test('Check the datatypes', () => {
    expect(functions.defineNumber(1)).toBe(1); // Consider the edge cases
    expect(functions.defineString("string")).toBe("string"); 
    expect(functions.defineBoolean(3,2)).toBe(true); 
    expect(functions.defineArray([1,2])).toBe((1)); 
    expect(functions.defineObject({name: "parveen"})).toBe("parveen"); 
    expect(functions.defineUndefined(undefined)).toBe(); 
    expect(functions.defineSampleOfIfElse(3,4)).toBe(true); 
    expect(functions.defineSampleOfIfElse(4,3)).toBe(false); 
    
    expect(functions.addToFront(["apple"])).toBe("kiwi,apple"); 
    expect(functions.addToEnd(["Grapes"])).toBe("Grapes,Grapes"); 
    expect(functions.updateValues(["Grapes"])).toBe("orange"); 
    expect(functions.forLoop(2)).toBe(2); 
    expect(functions.forInLoop({fname: "parveen", lname: "kaur"})).toBe("parveen kaur"); 
    expect(functions.whileLoop(4)).toBe(" the last number is 3" );   
    expect(functions.doWhileLoop(4)).toBe(" the last number is 3" );
    expect(functions.forEachArrFunction(["a","b","c"])).toBe("abcd" );
    expect(functions.doWhileLoop(4)).toBe(" the last number is 3" );
    expect(functions.doWhileLoop(4)).toBe(" the last number is 3" );
    expect(functions.doWhileLoop(4)).toBe(" the last number is 3" );
    expect(functions.declareObjects({name: "Parveen", type: "FSD"})).toBe("Parveen is FSD" );
    expect(functions.objectKeyValue({name: "Parveen"})).toBe("Parveen");                                                                              
});








/*define attributes / variables
number
string
boolean
array
dictionary / objects
undefined
sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value*/
