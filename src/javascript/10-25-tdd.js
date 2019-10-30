
//import functions from "./tdd-01";
const functions = {
    helloworld: () => {
        return "Hello World!";
    },
    sum: (input1,input2) => {
        return input1 + input2;
    },
    sub: (input1,input2) => {
        return input1 - input2;
    },
    mul: (input1,input2) => {
        return input1 * input2;
    },
    dvd: (input1,input2) => {
        return input1 / input2;
    }, 
    clear: () => {
     //let clearOutput = 
     //idAnswer.textContent=0 ;
       return 0;
    },
    //---Canadian Taxes---   
    taxes: (num) => {
        if(num < 0) return 0;
        if(num <= 47630) return num * 0.15;
        if(num <= 95259) return ((num- 47630) * 0.205) +7145;
        if(num <= 147667) return ((num- 95259) * 0.26) + 16908;
        if(num <= 210371) return ((num- 147667) * 0.29) + 30535;
        if(num > 210371) return ((num - 210371) * 0.33) + 48719;
    },
    //--- Working with Arrays--

    addElement: (arr, ele) => {
        arr.push(ele);
        return arr;
    },
    /*arrayShow: arr => {
    return `${arr.join()}`;
},*/

    totalArr: (arr) => {
        let total = 0;
        let x;
        for (x of arr){
            total += Number(x);
        }
        return total;
    },

    clearArr: (arr) => {
        arr.length =0;
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


}

export default functions;