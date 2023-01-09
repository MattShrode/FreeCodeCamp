//Sum All Numbers in a Range
{
  function sumAll(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      sum += i;
    }
    return sum;
  }

  sumAll([1, 4]);
}

//Diff Two Arrays
{
  function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
        newArr.push(arr2[j]);
      }
    }
    return newArr;
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

//Seek and Destroy
{
  function destroyer(arr) {
    let args = [...arguments].slice(1);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let remove = false;
      for (let j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          remove = true;
        }
      }
      if (!remove) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  destroyer([2, 3, 2, 3], 2, 3);
}

//Wherefore Art Thou
{
  function whatIsInAName(collection, source) {
    const keys1 = Object.keys(source);
    return collection.filter((obj) => {
      for (let i = 0; i < keys1.length; i++) {
        if (
          !obj.hasOwnProperty(keys1[i]) ||
          obj[keys1[i]] !== source[keys1[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }

  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  );
}

//Spinal Tap Case
{
  function spinalCase(str) {
    let newStr = str
      .split(/(?<=[a-z])(?=[A-Z])|\W|[_]/g)
      .join("-")
      .toLowerCase();
    return newStr;
  }

  spinalCase("AllThe-small Things");
}

//Pig Latin
{
  function translatePigLatin(str) {
    let newStr = "";
    if (str.match(/^[aeiou]/)) {
      newStr = str.concat("way");
      console.log(newStr);
    } else {
      let vowelIndex = str.search(/[aeiou]/i);
      if (vowelIndex === -1) {
        newStr = `${str}ay`;
        return newStr;
      }
      let consonants = str.slice(0, vowelIndex);
      let theRest = str.slice(vowelIndex);
      newStr = `${theRest}${consonants}ay`;
      console.log(newStr);
    }
    return newStr;
  }

  translatePigLatin("consonant");
}

//Search and Replace
{
  function myReplace(str, before, after) {
    if (before[0] === before[0].toLowerCase()) {
      after = after.toLowerCase();
    } else {
      after = after[0].toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
    console.log(str);
    return str;
  }

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
}

//DNA Pairing
{
  function pairElement(str) {
    let array = str.split("");
    let matchedArray = [];
    array.forEach(function (element) {
      let pair = "";
      switch (element) {
        case "A":
          pair = "T";
          break;
        case "T":
          pair = "A";
          break;
        case "C":
          pair = "G";
          break;
        case "G":
          pair = "C";
          break;
      }
      matchedArray.push([element, pair]);
    });
    return matchedArray;
  }

  pairElement("GCG");
}

//Missing Letters
{
  function fearNotLetter(str) {
    let start = str.charCodeAt(0);
    let missing = false;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) !== start + i) {
        missing = true;
        return String.fromCharCode(start + i);
      }
    }
    if (missing === false) {
      return undefined;
    }
  }

  fearNotLetter("abcdefghjklmno");
}

//Sorted Union
{
  function uniteUnique(arr) {
    let newArr = [];
    let args = Array.from(arguments);
    args.forEach(function (element) {
      element.forEach(function (subElement) {
        if (!newArr.includes(subElement)) {
          newArr.push(subElement);
        }
      });
    });
    return newArr;
  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
}

//Convert HTML Entities
{
  function convertHTML(str) {
    let array = str.split("");
    for (let i = 0; i < array.length; i++) {
      switch (array[i]) {
        case "&":
          array.splice(i, 1, "&amp;");
          break;
        case "<":
          array.splice(i, 1, "&lt;");
          break;
        case ">":
          array.splice(i, 1, "&gt;");
          break;
        case '"':
          array.splice(i, 1, "&quot;");
          break;
        case "'":
          array.splice(i, 1, "&apos;");
          break;
        default:
          break;
      }
    }
    let newStr = array.join("");
    return newStr;
  }

  convertHTML("Dolce < Gabbana");
}
