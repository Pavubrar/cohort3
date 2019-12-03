import operations from './domfunc2.js';
import { City, Community } from './cityAndCommunity.js';
import fetchFunctions from './fetch.js';


let newCommunity = new Community();
let counter;
let highestKey = fetchFunctions.load(newCommunity);
highestKey.then(result => {
    console.log(result)
    counter = (result + 1);
    if (newCommunity.cities.length === 2) {
        operations.addExtra(idleftSide);
    };
    for (let element of newCommunity.cities) {
        operations.addNew(idleftSide, element.key, element.name, element.longitude, element.latitude, element.population)
    };
    if (newCommunity.cities.length >= 1) {
        display.textContent = `Server data successfully loaded.\nThere are currently ${newCommunity.cities.length} cities.`
    } else {
        display.textContent = `Connected to the server.\nThere is no saved data to load, but you can start adding NOW.`
    }
}) // reject---?
idleftSide.addEventListener("click", async (event) => {
    if (event.target.className === "addNew") {
        let newCityName = input1.value;
        let newLongitude = Number(input2.value);
        let newLatitude = Number(input3.value);
        let newPopulation = Number(input4.value);
        if (newCityName != "" && newLongitude != "" && newLatitude != "" && newPopulation != "") {
            let message = newCommunity.addNewCity(counter, newCityName, newLongitude, newLatitude, newPopulation);
            if (message === `The new city has been added.Name: ${newCityName}`) {
                try {
                    console.log(newCommunity.cities[0]);
                    let data = await fetchFunctions.addNew(newCommunity.cities.filter(element => element.key === counter)[0]);
                    operations.addNew(idleftSide, counter, newCityName, newLongitude, newLatitude, newPopulation);
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
                } catch (error) {
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
            //console.log(searchKey)
            newCommunity.cities.forEach(async (element) => {
                if (element.key === searchKey) {
                    element.movedIn(Number(inputValue));
                    try {
                        let data = await fetchFunctions.update(element);
                        currentCity.children[1].value = "";
                        display.textContent = `Population of ${element.name} increased by ${inputValue}, \n Now the population of ${element.name} is ${element.population}`;
                    } catch (error) {
                        display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`;
                    }
                };
            });
        };
    };
    if (event.target.className === "withdraw") {
        let currentCity = event.target.parentElement;
        let inputValue = Number(currentCity.children[1].value);
        if (inputValue > 0) {
            let searchKey = Number(currentCity.attributes.cardKey.value);
            newCommunity.cities.find(async (element) => {
                if (element.key === searchKey) {
                    let message = element.movedOut(Number(inputValue));
                    try {
                        let data = await fetchFunctions.update(element);
                        currentCity.children[1].value = "";
                        if (!message) {
                            display.textContent = `Population of ${element.name} decreased by ${inputValue}, \n Now the population of ${element.name} is ${element.population}`;
                        } else
                            display.textContent = message;
                    } catch (error) {
                        display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`;
                    }
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
        let searchKey = Number(currentCity.attributes.cardKey.value);
        console.log(currentCityName);
        try {
            let data = await fetchFunctions.delete(searchKey);
            newCommunity.removeCity(searchKey);
            operations.delete(currentCity, idleftSide);
            display.textContent = `${currentCityName} is deleted... `;
        } catch (error) {
            display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`;
        }
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
        let mostNorthernCity = newCommunity.getMostNorthern();
        //let currentCityName = currentCity.children[0].children[0].textContent;
        display.textContent = `${mostNorthernCity.name} is the Most Northern City.`
    };
    if (event.target.className === "MostSouthern") {
       // let currentCity = event.target.parentElement;
        let mostSouthernCity = newCommunity.getMostSouthern();
        //let currentCityName = currentCity.children[0].children[0].textContent;
        display.textContent = `${mostSouthernCity.name} is the Most Southern City.`
    };
    if (event.toElement.className === "totalPopulation") {
        let totalPopulation = newCommunity.getPopulation();
        console.log(newCommunity.getPopulation());
        display.textContent = `The total population is ${totalPopulation}.`
    };
});




