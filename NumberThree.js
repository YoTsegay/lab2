function calcDownpayment(cost) {
  let value;
  if (cost > 0 && cost < 50000) {
    value = (5 / 100) * cost;
  } else if (cost >= 50000 && cost < 100000) {
    value = 2500 + (10 / 100) * (cost - 50000);
  } else if (cost >= 100000 && cost < 200000) {
    value = 7500 + (15 / 100) * (cost - 100000);
  } else if (cost >= 200000) {
    value = 5000 + (10 / 100) * (cost - 200000);
  } else {
    value = "not valid amount";
  }
  return value;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));
