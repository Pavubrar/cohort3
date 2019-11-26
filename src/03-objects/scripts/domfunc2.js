const operations ={
    delete: (currentCity, idleftSide) => {
        idleftSide.removeChild(currentCity);
    },
    addNew:(idleftSide, newCityName, newCityLongitude, newCityLatitude) => {
        let newCity = document.createElement("div");
        newCity.className = "cityCard";
        let newCityHeader = document.createElement("div");
        newCityHeader.className ="cityHeader";
        let newCityNam = document.createElement("h3");
        newCityNam.textContent =`${newCityName}`;
        let newCityLong = document.createElement("h3");
        newCityLong.textContent = `${newCityLongitude}`;
        let newCityLatt = document.createElement("h3");
        newCityLatt.textContent = `${newCityLatitude}`;
        newCityHeader.appendChild(newCityNam);
        newCityHeader.appendChild(newCityLatt);
        newCityHeader.appendChild(newCityLong);
        let inputField = document.createElement("input");
        inputField.className = "inputField"
        inputField.type = "Number"
        inputField.placeholder = "number of people moved in/out"
        let deposite = document.createElement("button");
        deposite.className="deposite";
        deposite.textContent = `Moved In`;
        let withdraw = document.createElement("button");
        withdraw.className="withdraw";
        withdraw.textContent = `Moved Out`;
        let newDelete = document.createElement("button");
        newDelete.className="delete";
        newDelete.textContent = `Delete`;
        let balance = document.createElement("button");
        balance.className="balance";
        balance.textContent = `Show`;
        let howBig = document.createElement("button");
        howBig.className="howBig";
        howBig.textContent = `How Big`;
        let which = document.createElement("button");
        which.className="which";
        which.textContent = `Hemisphere`;
        newCity.appendChild(newCityHeader);
        newCity.appendChild(inputField);
        newCity.appendChild(deposite);
        newCity.appendChild(withdraw);
        newCity.appendChild(balance);
        newCity.appendChild(newDelete);
        newCity.appendChild(howBig);
        newCity.appendChild(which);
        idleftSide.appendChild(newCity);
    },
    addExtra: (idleftSide) => {
        let MostNorthern = document.createElement("button");
        MostNorthern.className="MostNorthern";
        MostNorthern.textContent = `Most Northern`;
        let MostSouthern = document.createElement("button");
        MostSouthern.className="MostSouthern";
        MostSouthern.textContent = `Most Southern`;
        let totalPopulation = document.createElement("button");
        totalPopulation.className="totalPopulation";
        totalPopulation.textContent = `Total Population`;
        let extraDiv = document.createElement("div");
        extraDiv.className ="extraDiv";
        extraDiv.appendChild(MostNorthern);
        extraDiv.appendChild(MostSouthern);
        extraDiv.appendChild(totalPopulation);
        idleftSide.insertBefore(extraDiv, idleftSide.children[3])
    },
    deleteExtra: (idleftSide) => {
        idleftSide.removeChild(idleftSide.children[3]);
    }
};

export default operations;
