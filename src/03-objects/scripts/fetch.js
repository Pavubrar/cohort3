//const fetch = require('node-fetch');
const functions = {
    //url: 'https://uinames.com/api/?amount=10',

getFirstName (data)  {
    console.log(data[0].name);
    return data[0].name;
    

},
getAllFirstName(data) {
    return data.map(person => person.name);
}
}
export default functions;