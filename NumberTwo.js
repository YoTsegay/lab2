function compoundInterest(initialAmount, interestrate, years) {
  for (let i = 1; i <= years; i++) {
    initialAmount = initialAmount + ((initialAmount * interestrate) / 100) * i;
  }
  return initialAmount;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
