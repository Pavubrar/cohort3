
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


}

export default functions;