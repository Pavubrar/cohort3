import {City, Community} from "./cityAndCommunity.js";


let newCity = new City(1, "Calgary", -114, 51, 28);



 test('show city\'s info',() => {
     
     expect(newCity.showCity()).toEqual("Name: Calgary\nLongitude: -114\nLatitude: 51\nPopulation: 28");
     expect(newCity.movedIn(100)).toEqual(128);
     expect(newCity.movedOut(3)).toEqual(125);
     expect(newCity.howBigCity()).toEqual("Village");
     expect(newCity.movedOut(116)).toEqual(9);
     expect(newCity.howBigCity()).toEqual("Hamlet");
     expect(newCity.movedIn(10001)).toEqual(10010)
     expect(newCity.howBigCity()).toEqual("Town");
     expect(newCity.movedIn(10001)).toEqual(20011)
     expect(newCity.howBigCity()).toEqual("Large Town");
     expect(newCity.movedIn(100000)).toEqual(120011)
     expect(newCity.howBigCity()).toEqual("City");
 });
  
 let newCommunity = new Community;
 newCommunity.addNewCity(1, "Calgary", -114, 51, 28);
 newCommunity.addNewCity(2, "Edminton", -121, 37, 125);
 newCommunity.addNewCity(3, "Chestermere", -113, 51, 10010);
 newCommunity.addNewCity(4, "Banff", -116, 51, 20011);
 newCommunity.addNewCity(5, "Camrose", -112, 53, 120011);
 test('adding new city', () => {
      expect(newCommunity.Cities.length).toEqual(5);
      expect(newCommunity.getPopulation()).toEqual(150185);
      newCommunity.removeCity(3);
      expect(newCommunity.Cities.length).toEqual(4);
      expect(newCommunity.getMostNorthern()).toEqual( [{"Key": 5, "Latitude": 53, "Longitude": -112, "Name": "Camrose", "Population": 120011}]);
      expect(newCommunity.getMostSouthern()).toEqual({"Key": 2, "Latitude": 37, "Longitude": -121, "Name": "Edminton", "Population": 125} );
  })
