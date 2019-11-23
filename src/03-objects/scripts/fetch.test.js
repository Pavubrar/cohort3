import fetchFunctions from './fetch.js'

//global.fetch = require('node-fetch');
const data = [
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" }, 
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" }, 
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" }, 
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" }, 
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" }, 
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" }, 
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" }, 
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" }, 
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" }, 
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]

test('getting first name of first person from data',() => {
    expect(functions.getFirstName(data)).toEqual( "Maricica");
})
test('getting first name of all persons from data',() => {
    expect(functions.getAllFirstName(data)).toEqual(  ["Maricica", "Nishant", "Nicuță", "Barbara", "Stanca", "Bella", "Fabian", "Славчо", "Upendra", "Dumitra"]);
})
