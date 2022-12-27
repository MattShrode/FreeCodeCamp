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