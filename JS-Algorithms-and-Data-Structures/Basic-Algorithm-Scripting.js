// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = (9/5)*celsius+32;
    return fahrenheit;
  }

//Reverse a String
function reverseString(str) {
    let newArr = str.split('');
    let newStr = "";
    for (let i=newArr.length-1; i>=0; i--) {
      newStr += newArr[i];
    }
    return newStr;
  }

//Factorialize a Number
function factorialize(num) {
    let product = 1
    for (let i=num; i>0; i--) {
      product *= i;
    }
    return product;
  }

//Find the Length of the Longest Word in a String
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longestWord = "";
    for (let i=0; i<arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord.length;
  }

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
      let largest = arr[i][0];
      for (let j=0; j<arr[i].length; j++) {
        if(arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      newArr.push(largest);
    }
    return newArr;
  }

//Confirm the Ending
function confirmEnding(str, target) {
    let newStr = str.substr(str.length-target.length);
    if (newStr === target) {
      return true;
    } else {
      return false;
    }
  }

//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    } else {
      let newStr = "";
      for (let i=0; i<num; i++) {
        newStr += str;
      }
      return newStr;
    }
  }

//Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
      let newStr = str.substr(0, num);
      newStr += "...";
      return newStr
    } else {
      return str;
    }
  }

//Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for (let i=0; i<arr.length; i++) {
      if (func(arr[i])) {
        return num = arr[i];
      }
    }
    return undefined;
  }

//Boo Who
function booWho(bool) {
    return bool === true || bool === false ? true : false;
  }

//Title Case a Sentence
function titleCase(str) {
    let arr = str.split(" ");
    for (let i=0; i<arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    let newStr = arr.join(" ");
    return newStr;
  }