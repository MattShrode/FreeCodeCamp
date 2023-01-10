function rot13(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let ascii = arr[i].charCodeAt(0);
    if (ascii >= 65 && ascii < 78) {
      newArr.push(String.fromCharCode(ascii + 13));
    } else if (ascii >= 78 && ascii < 91) {
      newArr.push(String.fromCharCode(ascii - 13));
    } else {
      newArr.push(arr[i]);
    }
  }
  let decodedString = newArr.join("");
  console.log(decodedString);
  return decodedString;
}

rot13("SERR PBQR PNZC");
