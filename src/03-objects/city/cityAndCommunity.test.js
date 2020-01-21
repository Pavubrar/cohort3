import {City, Community} from "./cityAndCommunity.js";


let newCity = new City(1, "Calgary", -114, 51, 28);



 test('show city\'s info',() => {
     
     expect(newCity.showCity()).toEqual(" name: Calgary\nlongitude: -114,\n latitude: 51,\n population: 28");
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
      expect(newCommunity.cities.length).toEqual(5);
      expect(newCommunity.getPopulation()).toEqual(150185);
      newCommunity.removeCity(3);
      expect(newCommunity.cities.length).toEqual(4);
      expect(newCommunity.getMostNorthern()).toEqual( {"key": 5, "latitude": 53, "longitude": -112, "name": "Camrose", "population": 120011});
      expect(newCommunity.getMostSouthern()).toEqual({"key": 2, "latitude": 37, "longitude": -121, "name": "Edminton", "population": 125} );
     // expect(newCommunity.Cities.).toEqual(4);
  })
