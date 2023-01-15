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
  /*let modifiedDrawer = [];
    for (const element of cid) {
      modifiedDrawer.push(element);
    }
    modifiedDrawer.forEach(element => {
      for(let i=1; i<element.length; i++) {
        element[i] = Math.round(element[i] * 100);
      }
    });*/
  console.log(changeDue);
  const denomination = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  if (totalcid > changeDue) {
    for (let i = cid.length - 1; i >= 0; i--) {
      if (changeDue >= cid[i][1] && cid[i][1] !== 0) {
        object.change.push(cid[i]);
        changeDue -= cid[i][1];
      } else if (changeDue < cid[i][1]) {
        let difference = cid[i][1] - changeDue;
        console.log(cid[i], difference);
      }
    }
    console.log(changeDue);
  }
  return object;
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
