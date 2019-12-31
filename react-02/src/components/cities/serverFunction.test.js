import {Community} from './cities'
import serverFunctions from './serverFunction'

describe('Class methods update on server using API CRUD functionality', ()=>{
    global.fetch = require('node-fetch');
    const url = 'http://localhost:5000/';
    const serverTestData =[
        { "key": 1, "name": "Calgary", "lat": 51.05, "long": -114.05, "pop": 1200000 },
        { "key": 2, "name": "Edmonton", "lat": 53.55, "long": -113.49, "pop": 1000000 },
        { "key": 3, "name": "Red Deer", "lat": 52.28, "long": -113.81, "pop": 100000 },
        { "key": 4, "name": "Lethbridge", "lat": 49.7, "long": -112.8, "pop": 93000 },
        { "key": 5, "name": "Peace River", "lat": 56.23, "long": -117.23, "pop": 7000 }
    ];
    test('loadData() loads server data into city list', async () =>{
        const province = new Community([]);
        await serverFunctions.postData(url + 'clear');
        await serverFunctions.postData(url + 'add', serverTestData[0]);
        await serverFunctions.postData(url + 'add', serverTestData[1]);
        await serverFunctions.postData(url + 'add', serverTestData[2]);
        await serverFunctions.postData(url + 'add', serverTestData[3]);
        await serverFunctions.postData(url + 'add', serverTestData[4]);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);
        expect(province.cityList.length).toEqual(0);
        expect(province.getHighestKey()).toEqual(0);

        await serverFunctions.loadData(province);

        expect(province.cityList.length).toEqual(5);
        expect(province.cityList[2]).toEqual(data[2]);
        expect(province.getHighestKey()).toEqual(5);
    });
})