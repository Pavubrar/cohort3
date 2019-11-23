class City {
    constructor(Key,Name, Longitude, Latitude, Population){
    this.Key = Key;
    this.Name = Name;
    this.Longitude = Longitude;
    this.Latitude =Latitude;
    this.Population = Population;
}
showCity(){
return `Name: ${this.Name}\nLongitude: ${this.Longitude}\nLatitude: ${this.Latitude}\nPopulation: ${this.Population}`;
}
movedIn(num){
    return this.Population += num;
}
movedOut(num){
    return this.Population -= num;
}
howBigCity(){
    if(this.Population <= 100) return "Hamlet";
    if(this.Population > 100 && this.Population < 1000) return "Village";
    if(this.Population > 1000 && this.Population <= 20000) return "Town";
    if(this.Population > 20000 && this.Population <= 100000 ) return "Large Town";
    if(this.Population >100000) return "City";

}
}

class Community {
    constructor(){
        this.Cities =[];
    }
    whichSphere(){
        if(Latitude > 0) return "Northern Hemisphere";
        if(this.Latitude <= 0) return "Southern Hemisphere";// if (city.lat > 0) return "Northern Hemisphere";
    }                                                       //return "Southern Hemisphere";
    addNewCity(Key,Name, Longitude, Latitude, Population){
        let message;
        if(this.Cities.filter((itm) => (itm.Latitude === Latitude && itm.Longitude === Longitude).length === 0)) {
            let NewCity = new City(Key,Name, Longitude, Latitude, Population);
            this.Cities.push(NewCity);
            message = `The new city has been added. \nName: ${Name}`;
        }else{
            message = `There is already a city with the same latitude and longitude.\nPlease edit your inputs`;
        }
        return message;
    }
    getPopulation(){
        return this.Cities.reduce((acc,itm) => itm.Population+acc,0);
    }
    removeCity(Key){
        console.log(this.Cities.length);
        this.Cities = this.Cities.filter((itm) => itm.Key !== Key);
        console.log(this.Cities.length);
    }
    getMostNorthern(){
        let northernSphere = this.Cities[0].Latitude;
        this.Cities.forEach(element => {
            if(element.Latitude > northernSphere){
                northernSphere = element.Latitude
            }
            return northernSphere;
        })
        let mostNorthernCity = this.Cities.filter(element => element.Latitude ===northernSphere)
        return mostNorthernCity;
    }
    getMostSouthern(){
        let southernSphere = this.Cities[0].Longitude;
        this.Cities.forEach(element => {
            if(element.Longitude < southernSphere){
            southernSphere = element.Longitude
            }
            return southernSphere;
        })
        let mostSouthernCity = this.Cities.filter(element => element.Longitude === southernSphere);
        return mostSouthernCity[0];
    }

}
export {City, Community};