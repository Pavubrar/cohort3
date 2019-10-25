const functions = {
    defineNumber: (num1) =>{
        return num1;
    } ,
    defineString: (str) => {
        return str;
    },
    defineBoolean: (n1,n2) =>{
        return n1 >n2;
    },
    defineArray: (arr) =>{
        return arr[0];
    },
    defineObject: (obj) => {
        return obj.name;
    },
    defineUndefined: () => {
        return undefined;
    },
    defineSampleOfIfElse: (num1, num2) => {
        if (num1 < num2) {
            return true;
        }
            else {
                return false;
            }
        
    },
    //arrays
    
    addToFront: (arrStart) =>{

        arrStart.unshift(["kiwi"]);
        return arrStart [0] +  ","  + arrStart[1];
        
    },
    addToEnd: (arrEnd) => {
        arrEnd.push(["Grapes"]);
        return arrEnd [0] + "," + arrEnd[1];
    },
    updateValues:(arrUpdate) => {
        return arrUpdate [0] ="orange";
    },
    // Loops
    forLoop: (num) => {
        var getnum = 0;
        for(var i =0; i< num; i++){
            getnum = getnum +1;
        }
        return getnum;
    },
    forInLoop: object => {
        var text ="parveen kaur";
        var x;
        for (let x in Object){
            text += Object[x] + " ";
        }
        text = text.trim();
        return text;
    },
    whileLoop: (num) => {
        var i =0;
        var str;
        while (i< num){
            str =i;
            i++;
        }
        return" the last number is " + str;
    },
    doWhileLoop: (num) => {
        var i=0;
        var str;
        do {
            str=i;
            i++;
        }
        while (i < num){
return " the last number is " + str;
        }
    },
    forEachArrFunction: (strArray) => {
        let newArray =[];
        strArray.forEach(function(strArray) {
            newArray=newArray+strArray;
        });
        return newArray + "d";
    },
    declareObjects: (anObject) =>  {
        let result = "";
        result = anObject.name + " is " + anObject.type;
        return result;
    },
    // lookup key to retrieve value
    objectKeyValue: (objectKey) => {
        var combine = objectKey.name;
        return combine;
    }
    
};

export default functions;