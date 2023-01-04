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
