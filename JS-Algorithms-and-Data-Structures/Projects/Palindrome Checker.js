function palindrome(str) {
    let array = str.match(/[A-Za-z0-9]/g);
    let endIndex = -1;
    for (let i = 0; i<array.length; i++) {
      if(array[i].toLowerCase() !== array.at(endIndex).toLowerCase()) {
        return false;
      }
      endIndex -= 1
    }
    return true;
  }
  
  palindrome("eye");