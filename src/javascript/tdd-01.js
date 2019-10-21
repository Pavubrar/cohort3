const functions = {

    emailBuilder:() => {
    return true;
    emailBuilder: (a,b) => {
        let fInitial = a.charAt(0).toLowerCase();
        let lName = b.toLowerCase();
        return `${fInitial}.${lname}@evolveu.ca`;
     }
},
};

export default functions;
