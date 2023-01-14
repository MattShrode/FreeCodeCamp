function checkCashRegister(price, cash, cid) {
  let totalcid = 0;
  let changeDue = cash - price;
  cid.forEach((element) => {
    totalcid += element[1];
  });
  let object = {
    status: "",
    change: [],
  };
  if (totalcid < changeDue) {
    object.status = "INSUFFICIENT_FUNDS";
    return object;
  }
  if (totalcid === changeDue) {
    object.status = "CLOSED";
    for (let i = 0; i < cid.length; i++) {
      object.change.push(cid[i]);
    }
    return object;
  }
  let change;
  return change;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
