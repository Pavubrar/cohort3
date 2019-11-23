//const fetch = require('node-fetch');
const fetchFunctions = {
    //url: 'https://uinames.com/api/?amount=10',

getFirstName (data)  {
    console.log(data[0].name);
    return data[0].name;
    

},
getAllFirstName(data) {
    return data.map(person => person.name);
}
};

const me = { 
    "name": "Parveen", 
    "surname": "Kaur", 
    "gender": "female", 
    "region": "Canada" 
};
const sMe = JSON.stringify(me);
console.log(sMe);



export default fetchFunctions;