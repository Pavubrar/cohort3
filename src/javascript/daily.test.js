import functions from './daily'

//Nov22
test('sortFunctions()', () => {
    expect(functions.sortFunctions()[0]).toEqual({ num: 9, str: "pears", origin: "Oregon" })
});

//Nov21
test('summarizePeople() return object of total number of people, total age, and the average age - from Alberta or BC only', () => {
    expect(functions.summarizePeople(people)).toEqual({ totalPeople: 22, totalAge: 838, averageAge: 38.09090909090909 });
});
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


const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];
test('filter out people from AB and BC',() => {
    const peopleABBC = functions.ABBCPeople(people);
    expect(peopleABBC[2]).toEqual({fname:"Byron", lname:"Cardenas", province:"BC", age:38});
});
test('full names of people from AB and BC', () => {
expect(functions.returnFullNames(people[1])).toEqual("Angela Jones");
});
test('filter out people from AB and BC with thier names', () => {
    expect(functions.ABBCPeople(people, functions.returnFullNames)[1]).toEqual("Angela Jones");
    expect(functions.ABBCPeople(people, functions.returnFullNames)[2]).toEqual("Byron Cardenas");
})


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
