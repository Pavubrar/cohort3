/* 1.write the stub (method name, parms, dummy return)
 2.write a min code to pass
 3.write the minimun code to get the tests to pass
 4.another test
 5.fail
 6.write code
 7.continue
 8.refactor/repeat for all the functionality you need 
  a stub has  function name, parameters, return dummy*/
import functions from "./10-25-tdd";


test ('hello world',() =>{
    console.log ("Hello World from test");

});
 test ('chech the sum',() =>{
     expect (functions.sum(1,2)).toBe(3);
 })
 