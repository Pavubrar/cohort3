import functions from './daily'

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// 2019-11-6

test("find the balance >= 1000",() => {
expect(functions.bigBalances(data.staff)).toEqual([1000, 1330]);
});

//Oct29 - More Array Exercises
test('totalBalances()', () => {
    expect(functions.totalBalances(data.staff)).toEqual(3823);
 });
 
 test('averageBalances()', () => {
     expect(functions.averageBalances(data.staff)).toEqual(546.1428571428571);
 });


 


// 25-Oct-2019 Daily Exercises
test("testing loopStaffForEach using forEach callback", () => {
	const staffEmail = functions.loopStaffForEach(data.staff);
	expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
	expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("testing loopStaffMap using map callback", () => {
	const staffEmail = functions.loopStaffMap(data.staff);
	expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
	expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});
// 24-Oct-2019 Daily Exercises
test ("check LoopStaffOf using forOf", ()=> {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
	expect(staffEmail[4]).toEqual("noah.ho@evolveu.ca");
	expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});

test("testing loopStaffIn using for-in", () => {
	const staffEmail = functions.loopStaffIn(data.staff);
	expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
	expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});



// 21-Oct-2019 Daily Exercises

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

	


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
