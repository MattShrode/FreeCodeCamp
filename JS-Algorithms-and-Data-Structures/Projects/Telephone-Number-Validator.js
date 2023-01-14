function telephoneCheck(str) {
    let noParen = /^1?\s?[-]?\d{3}\s?[-]?\d{3}\s?[-]?\d{4}$/g;
    let paren = /^1?\s?[-]?[(]{1}\d{3}[)]{1}\s?[-]?\d{3}\s?[-]?\d{4}$/g;
    if (str.match(paren) || str.match(noParen)) {
      return true;
    }
    return false
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));
  console.log(telephoneCheck("5555555555"));
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("1(555)555-5555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("1 456 789 4444"));