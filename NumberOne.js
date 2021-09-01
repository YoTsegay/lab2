function computeSalesCommission(salaried, salesAmount) {
  let value = 0;
  if (salaried == true) {
    if (salesAmount < 300) {
      value = 0;
      return value;
    } else if (salesAmount >= 300 && salesAmount < 500) {
      value = (salesAmount * 1) / 100;
    } else {
      value = (salesAmount * 2) / 100;
    }
  } else if (salesAmount >= 300 && salesAmount < 500) {
    value = (salesAmount * 2) / 100;
    return value;
  } else if (salesAmount >= 500) {
    value = (3 / 100) * salesAmount;
  }

  return value;
}
console.log(computeSalesCommission(true, 200));
console.log(computeSalesCommission(false, 200));
console.log(computeSalesCommission(true, 300));
console.log(computeSalesCommission(false, 300));
console.log(computeSalesCommission(true, 3500));
console.log(computeSalesCommission(false, 3500));

function convertFirnigt(num) {
  let fir = ((num - 32) * 5) / 9;
  return fir;
}
console.log(convertFirnigt(212));
function twopointsasinputs(x1, x2, y3, y4) {
  let s = Math.sqrt(Math.pow(x1 - y3, 2) + Math.pow(x2 - y4, 2));
  return s;
}
console.log(twopointsasinputs(0, 0, 5, 5));
