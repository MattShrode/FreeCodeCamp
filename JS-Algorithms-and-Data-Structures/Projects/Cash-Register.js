function checkCashRegister(price, cash, cid) {
  //Convert to integers to avoid floating point number problems.
  const intPrice = price * 100;
  const intCash = cash * 100;
  cid.forEach((element) => {
    for (let i = 1; i < element.length; i++) {
      element[i] = Math.round(element[i] * 100);
    }
  });

  let totalcid = 0;
  let changeDue = intCash - intPrice;
  const result = { status: "", change: [] };
  const denomination = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  //Calculate the total cash in the drawer
  cid.forEach((element) => {
    totalcid += element[1];
  });

  //Insufficient drawer cash to cover the change
  if (totalcid < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  //Drawer cash matches the change
  if (totalcid === changeDue) {
    result.status = "CLOSED";
    for (let i = 0; i < cid.length; i++) {
      result.change.push(cid[i]);
      result.change[i][1] /= 100;
    }
    return result;
  }

  if (totalcid > changeDue) {
    for (let i = cid.length - 1; i >= 0; i--) {
      let billQuantity = cid[i][1] / denomination[i]; //Get number of bills in drawer
      if (changeDue >= cid[i][1] && cid[i][1] !== 0) {
        result.change.push(cid[i]);
        changeDue -= cid[i][1];
      } else if (changeDue < cid[i][1] && billQuantity > 1) {
        let billsNeeded = Math.floor(changeDue / denomination[i]);
        let totalOfDenomination = billsNeeded * denomination[i];
        if (billsNeeded > 0) {
          result.change.push([cid[i][0], billsNeeded * denomination[i]]);
          changeDue -= totalOfDenomination;
        }
      }
    }

    if (changeDue !== 0) {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
    } else {
      result.status = "OPEN";
      result.change.forEach((element) => {
        for (let i = 1; i < element.length; i++) {
          element[i] = element[i] / 100; //Convert back to monetary format
        }
      });
    }
  }
  return result;
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
