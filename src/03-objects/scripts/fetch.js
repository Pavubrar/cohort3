//const fetch = require('node-fetch');
import { City, Community } from './cityAndCommunity';
const url = 'https://localhost:5000/';

const fetchFunctions = {

    // getFirstName (data)  {
    //     console.log(data[0].name);
    //     return data[0].name;


    // },
    // getAllFirstName(data) {
    //     return data.map(person => person.name);
    // }
    // };

    // const me = { 
    //     "name": "Parveen", 
    //     "surname": "Kaur", 
    //     "gender": "female", 
    //     "region": "Canada" 
    // };
    // const sMe = JSON.stringify(me);
    // console.log(sMe);


    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
        const json = await response.json();   // parses JSON response into native JavaScript objects
        // json.status = response.status;
        // json.statusText = response.statusText;
        return json;
    },

    async load(newCommunity) {
        let data = await this.postData(url + 'all');
        if (data.length != 0) {
            newCommunity.Cities = data.map(element => new City(element.key, element.name, element.longitude, element.latitude, element.population))
            let keysArray = newCommunity.Cities.map(element => element.key)
            keysArray.sort((a, b) => b - a);
            let highestKey = keysArray[0];
            return highestKey;
        }
        let highestKey = 0;
        return highestKey;
    },
    async clear() {
        let data = await this.postData(url + 'clear');
    },
    async addNew(newCity) {
        let data = await this.postData(url + 'add', newCity);
        return data;
    },
    async update() {
        let data = await this.postData(url + 'update', currentCity);
    },
    async delete() {
        let data = await this.postData(url + 'dlete', {key: foundKey});
    }
}
export default fetchFunctions;



