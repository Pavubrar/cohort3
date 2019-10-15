/*function findNumber(values) {
    let result = [];
    for (let i = 0; i < values.length; ++i) {
      if (0 <= values[i]) {
        result[values[i]] = true;
      }
    }
  
    for (let i = 1; i <= result.length; ++i) {
      if (undefined === result[i]) {
        return i;
      }
    }
    
    return 1
  }
  
  console.log(
      findNumber([1, 3, 6, 4, 1, 2]),
      findNumber([1, 2, 3]),
    findNumber([-1, -3, 1, 2]),
    findNumber([-1, -3]),
    findNumber([]),
  );


  function findNumber(values) {
    let result = [];
  
    for (let i = 0; i < values.length; ++i) {
      if (0 <= values[i]) {
        result[values[i]] = true;
      }
    }
  
    for (let i = 1; i <= result.length; ++i) {
      if (undefined === result[i]) {
        return i;
      }
    }
  
    return 1
  } */
  function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");