let tax = 0;
const canadaProvincesObj = {
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
	yt: "Yukon"
};
let objResult = "";
let newStr = "";
const functions = {
    
    size: (num) => {
        if (num <0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2
    },

    calculatorAdd: (num1, num2) => {
        return num1 + num2;
    },

    calculatorSub: (num1, num2) => {
        return num1 - num2;
    },
   
   
    calculatorMul: (num1,num2) => {
        return num1 * num2;
    },
    calculatorDvd: (num1,num2) => {
        return num1 / num2;
    },

    


 taxes:(num) => {
    if (num < 0) return 0;
    if (num <= 47630) return num * 0.15;
    if (num <= 95259) return ((num - 47630) * 0.205) + 7145;
    if (num <= 147667) return ((num - 95259) * 0.26) + 16908;
    if (num <= 210371) return ((num - 147667) * 0.29) + 30535;
    return ((num - 210371) * 0.33) + 48719;
},
arrayAdd: num => {
    if (typeof num === "number") {
        return `${num} was added to your array`;
    }
    return `${num} is not a number`;
},
arrayShow: arr => {
    return `${arr.join()}`;
},
arrayTotal: arr => {
    return `${arr.reduce((a, b) => a + b, 0)}`;
},
arrayClear: arr => {
    arr = null;
    return arr;
},

lookUp: (pCode) => {
        const dict = {
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
        return dict[pCode];
    }

};


/*
**** comment this out to run test
*/

export default functions;




