
//Nov22
let myArray = [
    { num: 5, str: "apples", origin: "BC" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 1, str: "cantaloupe", origin: "California" }
];
const functions = { 
    getData: (myArray1) =>{
        console.log('hi from get data');
        let numbArr = [];
        for(let obj of myArray1) {
            console.log('for loop', obj);
            console.log(obj.num);
            let {num, str, origin: orig} = obj;
            console.log(num);
            console.log(str);
            console.log(orig);
            numbArr.push(num);
            //return numbArr;
        };
        return (numbArr);
        
    },
        
    // sortFunc = function(a,b) {   // using anonymous function 
    //     return a.num - b.num;
    // }
    // }

    // myArray.sort(function fruitSort(a, b) {      // using named function
    //     if (a.str < b.str) return -1;
    //     if (a.str > b.str) return 1;
    //     return 0
    // });
    // console.log("myArray = ", myArray);

    //  myArray.sort((a, b) => {
    //     if (a.origin < b.origin) return 1;
    //     if (a.origin > b.origin) return -1;
    //     return 0
    // });
    // console.log("myArray = ", myArray);

    // return myArray;

  //Nov21
//  summarizePeople = (peopleArray) => {
//     const summary = {};
//     const peopleABBC = filterProvinces(peopleArray);

//     summary.totalPeople = peopleABBC.length;
//     summary.totalAge = peopleABBC.reduce(((accumulator, person) => accumulator + person.age), 0);
//     summary.averageAge = summary.totalAge / summary.totalPeople;
//     return summary;
// }  ,
    

// Callback Exercise (Part 1) of November 8, 2019

ABBCPeople: (peopleArr, callBack = array => array) => {
const filteredPeople =[];
for (let person of peopleArr) {
    if (person.province === "AB" || person.province === "BC"){
        filteredPeople.push(callBack(person));
    }
}
return filteredPeople;
},
returnFullNames: (person) => `${person.fname} ${person.lname}`,

    // 2019-11-6
bigBalances: (staffArray) => {
    const over1k = staffArray.filter(staffMem => staffMem.balance >= 1000);
    return over1k.map(elem => elem.balance);
    
},

    //2019-10-29 - More Array Exercises
totalBalances:(staffArray) => {
    return staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
},

 averageBalances: (staffArray) => {
    const total = staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
    return total /staffArray.length; 
},
   
 // 2019 - 10 -25

 loopStaffForEach: arr => {
    let staffEmail = [];
    arr.forEach(arrayElement => staffEmail.push(functions.makeEmailObject(arrayElement)));
    return staffEmail;
},

loopStaffMap: arr => {
    let staffEmail = [];
    arr.map(element => staffEmail.push(functions.makeEmailObject(element)));
    return staffEmail;
},
 loopStaffOf: arr => {
    let staffEmail = [];
    for (let elem of arr) {
        let email = functions.makeEmailObject(elem);
        staffEmail.push(email);
    }
    return staffEmail;
},
loopStaffIn: arr => {
    let staffEmail = [];
    for (let i in arr) {
        let email = functions.makeEmailObject(arr[i]);
        staffEmail.push(email);
    }
    return staffEmail;
},
    // 21-Oct-2019 Daily Exercise
    loopStaff: arr => {
		let staffEmail = [];
		arr.forEach(function(emailObj) {
			let email = functions.makeEmailObject(emailObj);
			staffEmail.push(email);
		});
        return staffEmail;
    },
// 2019-10-20

    sortAscending: arr => {
        arr.sort((a,b) => a-b);
        return arr;
    },

    sortDescending: arr => {
    
  /*let compareFunction = function(a, b) {
    return data[b][key] - data[a][key];
  }*/
  
       arr.sort((a,b) => b-a);
        return arr;
    },

    filterFunction: arr => {
        const newarr = arr.filter (currValue => currValue>2);
        return newarr;
    },
    reduceFunction: arr => {
        const result = arr.reduce((acc, elem) => acc + elem);
        return result;
    },
       
    mapFunction: arr => {
        const newArr = arr.map(elem => elem*5)
        return newArr;
    },
    sliceFunction: arr => {
        let newArr = arr.slice(1);
        return newArr;
    },
    spliceFunction: arr => {
        arr.splice(1,0,"splice");
        return arr;
    },

    forEachFunction: arr => {
        let elemlist =[];
        arr.forEach(function(arrElem) {
            elemlist.push(arrElem);

        });
        return elemlist;
    },
    forInLoop: obj => {
        let propertyList =[];
        for (let prop in obj) {
            propertyList.push(obj[prop]);
        }
return propertyList;

    },

    forOfLoop: arr => {
        let elemlist =[];
        for (const elem of arr) {
            elemlist.push(elem);
        }
        return elemlist;
    },
    doWhile: countUpto =>{
        let countArr =[];
        let i =1;
        do{
            countArr.push(i);
            i++;
        } while (i<= countUpto);
        return countArr;
    },
    whileLoop: str => {
        let newstr = "",
         i = str.length;
        while(i>0) {
            newstr += str.substring(i - 1 , i)
            i--;
        }
        return newstr;
    },
basicForLoop: (smallNum,largeNum) => {
    let sum =0;
for (let i= smallNum; i<=largeNum; i++){
sum+=i;
}
return sum;
},
// 2019-10-11
   makeEmailObject: obj =>{
        let first= obj.fname.toLowerCase();
        let last = obj.lname.toLowerCase();
    
     return `${first}.${last}@evolveu.ca`;
    }, 
    
    // 2019-10-7
  assertEqual: (in1,in2) => {
    
       
            const message ="*** the two values are not same:" + "\n";
            let combine;
            if (in1 === in2){
             return  "true";
        }
        else {
            combine = "p1-->" + in1  + "\n" + "p2-->" + in2;
             console.log( message + combine);
             return "false";
        }
        
    },
    


   makeEmailArr: (name) => {
       let first= name[0].toLowerCase();
       let last = name[1].toLowerCase();
   
    return `${first}.${last}@evolveu.ca`;
   },
};
  
 
 
 export default functions;