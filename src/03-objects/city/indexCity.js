import operations from './domfunc2.js';
import { City, Community } from './cityAndCommunity.js';
//import fetchfunctions from './scripts/fetch.js';

let newCommunity = new Community();
let key = 0;
idleftSide.addEventListener("click", (event) => {
    if (event.target.className === "addNew") {

        console.log(event.target.className);

        let newCityName = input1.value;
        let newLongitude = Number(input2.value);
        let newLatitude = Number(input3.value);
        let newPopulation = Number(input4.value);
        if (newCityName != "" && newLongitude != "" && newLatitude != "" && newPopulation != "") {
            key++;
            // if(newLongitude ===)
            let message = newCommunity.addNewCity(key, newCityName, newLongitude, newLatitude, newPopulation)
            console.log(message);
            if (message === `The new city has been added.Name: ${newCityName}`) {
                console.log("am inside if");
                operations.addNew(idleftSide, key, newCityName, newLongitude, newLatitude, newPopulation);
                input1.value = "";
                input2.value = "";
                input3.value = "";
                input4.value = "";
                display.textContent = message;
                if (newCommunity.cities.length === 2) {
                    operations.addExtra(idleftSide);
                };

            } else {
                display.textContent = message;
            }

        };
    };
    if (event.target.className === "deposite") {
        let currentCity = event.target.parentElement;
        let inputValue = Number(currentCity.children[1].value);
        if (inputValue > 0) {
            let searchKey = Number(currentCity.attributes.cardKey.value);
            newCommunity.cities.forEach((element) => { 
                if (element.key === searchKey){
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
               if (element.key === searchKey){
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
        console.log(currentCityName)
        operations.delete(currentCity, idleftSide);
        display.textContent = `${currentCityName} is deleted... `;
    }
    if (event.target.className === "howBig") {
        let currentCity = event.target.parentElement;
        let searchKey = currentCity.attributes.cardKey.value;
        newCommunity.cities.forEach(element => {
           if(element.key === searchKey){
            element.howBigCity(idhowbig);
            console.log(element.howBigCity(idhowbig));
            display.textContent = `This is a ${element.howBigCity(idhowbig)}`;
           };
        });
    };
    if (event.target.className === "which") {
        let currentCity = event.target.parentElement;
        let searchKey = currentCity.attributes.cardKey.value;
        newCommunity.cities.forEach(element => {
           if(element.key === searchKey){
            element.whichSphere();
            console.log(element.whichSphere(idwhich));
            display.textContent = `This city is in ${element.whichSphere(idwhich)}`;
           }
        });
    };
});


