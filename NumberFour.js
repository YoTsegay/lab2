function sumDigitsAndMult(num) {
  let sum = 0;
  let mut = 1;
  while (true) {
    let x = num % 10;
    sum = x + sum;
    mut = mut * x;
    num = Math.floor(num / 10);
    if (num < 10) {
      break;
    }
  }
  sum = num + sum;
  mut = mut * num;
  return sum + " & " + mut;
}
console.log(sumDigitsAndMult(1234));
console.log(sumDigitsAndMult(102));
console.log(sumDigitsAndMult(8));
