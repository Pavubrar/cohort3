import operations from './domfunc2.js';
import { City, Community } from './cityAndCommunity.js';
import fetchfunctions from './scripts/fetch.js';

let newCommunity = new Community();
let counter;
let highestKey = fetchfunctions.load(newCommunity);
highestKey.then(result => {
    counter = result + 1;
    if (newCommunity.cities.length === 2) {
        operations.addExtra(idleftSide);
    };
    for (let element of newCommunity.cities) {
        operations.addNew(idleftSide, element.name, element.longitude, element.latitude, element.population)
    };
    if (newCommunity.cities.length >= 1) {
        display.textContent = `Server data successfully loaded.\nThere are currently ${newCommunity.Cities.length} Cities.`
    } else {
        display.textContent = `Connected to the server.\nThere is no saved data to load, but you can start adding NOW.`
    }
}) // reject---?
idleftSide.addEventListener("click", (event) => {
    if (event.target.className === "addNew") {
        let newCityName = input1.value;
        let newLongitude = Number(input2.value);
        let newLatitude = Number(input3.value);
        let newPopulation = Number(input4.value);
        if (newCityName != "" && newLongitude != "" && newLatitude != "" && newPopulation != "") {
            key++;
            let message = newCommunity.addNewCity(key, newCityName, newLongitude, newLatitude, newPopulation);
            if (message === `The new city has been added.Name: ${newCityName}`) {
                try {
                    let data = await fetchfunctions.addNew(newCommunity.cities.filter(element => element.key === counter)[0]);
                    operations.addNew(idleftSide, key, newCityName, newLongitude, newLatitude, newPopulation);
                    input1.value = "";
                    input2.value = "";
                    input3.value = "";
                    input4.value = "";
                    display.textContent = message;
                    if (newCommunity.cities.length === 2) {
                        operations.addExtra(idleftSide);
                    } else {
                        display.textContent = message;
                    };
                } catch(error){
                    message = `We are sorry!! something went wrong while saving data.\n${error}`
                    newCommunity.removeCity(counter);
                    console.log(newCommunity);
                }
            }
            display.textContent = message;
        };
    };
    if (event.target.className === "deposite") {
        let currentCity = event.target.parentElement;
        let inputValue = Number(currentCity.children[1].value);
        if (inputValue > 0) {
            let searchKey = Number(currentCity.attributes.cardKey.value);
            newCommunity.cities.forEach((element) => {
                if (element.key === searchKey) {
                    element.movedIn(Number(inputValue));
                    currentCity.children[1].value = "";
                    display.textContent = `Population of ${element.name} increased by ${inputValue}, \n Now the population of ${element.name} is ${element.population}`;
                }
            });
        };
    };
    if (event.target.className === "withdraw") {
        let currentCity = event.target.parentElement;
        let inputValue = Number(currentCity.children[1].value);
        if (inputValue > 0) {
            let searchKey = Number(currentCity.attributes.cardKey.value);
            newCommunity.cities.find(element => {
                if (element.key === searchKey) {
                    let message = element.movedOut(Number(inputValue));
                    currentCity.children[1].value = "";
                    if (!message) {
                        display.textContent = `Population of ${element.name} decreased by ${inputValue}, \n Now the population of ${element.name} is ${element.population}`;
                    } else
                        display.textContent = message;
                };
            });
        };
    };
    if (event.target.className === "balance") {
        let currentCity = event.target.parentElement;
        let inputValue = Number(currentCity.children[1].value);
        let searchKey = Number(currentCity.attributes.cardKey.value);
        newCommunity.cities.forEach(element => {
            if (element.key === searchKey) {
                display.textContent = element.showCity();
            }
        });
    };

    if (event.target.className === "delete") {
        let currentCity = event.target.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        console.log(currentCityName);
        operations.delete(currentCity, idleftSide);
        display.textContent = `${currentCityName} is deleted... `;
    }
    if (event.target.className === "howBig") {
        let currentCity = event.target.parentElement;
        let searchKey = currentCity.attributes.cardKey.value;
        newCommunity.cities.forEach(element => {
            if (element.key === searchKey) {
                element.howBigCity(idhowbig);
                console.log(element.howBigCity());
                display.textContent = `This is a ${element.howBigCity()}`;
            };
        });
    };
    if (event.target.className === "which") {
        let currentCity = event.target.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let searchKey = Number(currentCity.attributes.cardKey.value);
        newCommunity.cities.forEach(element => {
            if (element.key === searchKey) {
                element.whichSphere();
                console.log(element.whichSphere());
                display.textContent = `${currentCityName} is in ${element.whichSphere()}`;
            }
        });
    };
    if (event.target.className === "MostNorthern") {
        //let currentCity = event.target.parentElement;
        let MostNorthernCity = newCommunity.getMostNorthern();
        //let currentCityName = currentCity.children[0].children[0].textContent;
        display.textContent = `${MostNorthernCity.name} is the Most Northern City.`
    };
    if (event.target.className === "MostSouthern") {
        let currentCity = event.target.parentElement;
        let MostSouthernCity = newCommunity.getMostSouthern();
        let currentCityName = currentCity.children[0].children[0].textContent;
        display.textContent = `${MostSouthernCity.currentCityName} is the Most Southern City.`
    };
    if (event.toElement.className === "totalPopulation") {
        let totalPopulation = newCommunity.getPopulation();
        display.textContent = `The total population is ${totalPopulation}.`
    };
});



