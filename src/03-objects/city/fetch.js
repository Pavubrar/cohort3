//const fetch = require('node-fetch');
import { City, Community } from './cityAndCommunity'; 
const url = 'http://localhost:5000/';

const fetchFunctions = {


    async postData(url = '', data = {}) {
        // console.log(url, data);
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
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },

    async load(newCommunity) {
        let data = await this.postData(url + 'all');
        console.log(data);
        newCommunity.cities = data.map(element => new City(element.key, element.name, element.longitude, element.latitude, element.population));
        console.log(newCommunity.cities);
    },
    async clear() {
        const uri = url + 'clear';
        console.log(uri); 
        await this.postData(uri);

    },
    async addNew(newCity) {
        try {
        await this.postData(url + 'add', newCity);
        return false;
        }catch (error){
            console.log(error);
            return ("Error: Server not responding. Failed to add city");
        }
    },
    async update(currentCity) {
        await this.postData(url + 'update', currentCity);
    },
    async delete(foundKey) {
        await this.postData(url + 'delete', {key: foundKey});
    },
    async getAllCities(){
        return await this.postData(url + 'all');
    }
}
export default fetchFunctions;



