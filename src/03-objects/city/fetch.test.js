global.fetch = require('node-fetch');
import fetchFunctions from './fetch.js';
import {City, Community} from './cityAndCommunity.js';
const url = 'http://localhost:5000/';

 describe('test fetch functions', () => {
     
    const serverTestData = [
        { "key": 1, "name": "Calgary", "latitude": 51.05, "longitude": -114.05, "population": 1200000 },
        { "key": 2, "name": "Edmonton", "latitude": 53.55, "longitude": -113.49, "population": 1000000 },
        { "key": 3, "name": "Red Deer", "latitude": 52.28, "longitude": -113.81, "population": 100000 },
        { "key": 4, "name": "Lethbridge", "latitude": 49.7, "longitude": -112.8, "population": 93000 },
        { "key": 5, "name": "Peace River", "latitude": 56.23, "longitude": -117.23, "population": 7000 }
    ];


     test('using server add function', async () => {
        const newCommunity = new Community();
        let data = await fetchFunctions.postData(url + 'clear');

        await fetchFunctions.postData(url + 'add', serverTestData[0]);
        await fetchFunctions.postData(url + 'add', serverTestData[1]);
        await fetchFunctions.postData(url + 'add', serverTestData[2]);
        await fetchFunctions.postData(url + 'add', serverTestData[3]);
        await fetchFunctions.postData(url + 'add', serverTestData[4]);

        data = await fetchFunctions.postData(url + 'all');
        //let highestKey = await fetchFunctions.load(newCommunity);
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);

        //data = await fetchFunctions.postData(url + 'clear')
        //await fetchFunctions.load(newCommunity);
        expect(newCommunity.cities.length).toEqual(0);
        expect(newCommunity.getHighestKey()).toEqual(0);

        await fetchFunctions.load(newCommunity);
        expect(newCommunity.cities.length).toEqual(5);
        expect(newCommunity.cities[2]).toEqual(data[2]);
        expect(newCommunity.getHighestKey()).toEqual(5);

     });

test('add city to server', async () => {
       const newCommunity = new Community();
       let data = await fetchFunctions.postData(url + 'clear');
       newCommunity.addNewCity(7, "Caroline",-114.74,52.09, 500);
       const newCity = newCommunity.cities[0];
       //console.log(newCity);
       await fetchFunctions.addNew(newCity);
       data = await fetchFunctions.postData(url + 'all');
       expect(data.status).toEqual(200);
       expect(data.length).toBe(1);
       expect(data[0].name).toBe("Caroline"); 
       expect(newCommunity.cities[0]).toEqual(data[0]);
    });
    test('updateData(city) updates city pop in server', async () => {
        const newCommunity = new Community();
        let data = await fetchFunctions.postData(url + 'clear');
        newCommunity.addNewCity(7, "Caroline",-114.74,52.09, 500);
       const newCity = newCommunity.cities[0];
      // console.log(newCity);
       await fetchFunctions.addNew(newCity);
       data = await fetchFunctions.postData(url + 'all');
       expect(data.status).toEqual(200);
       expect(data[0].population).toBe(500);

       newCommunity.getCity(7).movedIn(500);
       fetchFunctions.update(newCommunity.getCity(7));
console.log(newCommunity.getCity(7));
       data = await fetchFunctions.postData(url + 'all');
       expect(data.status).toEqual(200);
       expect(data[0].population).toBe(1000);

       newCommunity.getCity(7).movedOut(100);
        fetchFunctions.update(newCommunity.getCity(7));

        data = await fetchFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data[0].population).toBe(900);
    });
    test('deleteData(key) deletes city in server by key', async () => {
        await fetchFunctions.postData(url + 'clear');
        await fetchFunctions.postData(url + 'add', serverTestData[0]);
        await fetchFunctions.postData(url + 'add', serverTestData[1]);
        await fetchFunctions.postData(url + 'add', serverTestData[2]);
        await fetchFunctions.postData(url + 'add', serverTestData[3]);
        await fetchFunctions.postData(url + 'add', serverTestData[4]);

        let data = await fetchFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);

        await fetchFunctions.delete(2);

        data = await fetchFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(4);
        expect(data[1].name).toBe("Red Deer");
    });
});
