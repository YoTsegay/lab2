function twopointsasinputs(x1, x2, y3, y4) {
  let s = Math.sqrt(Math.pow(x1 - y3, 2) + Math.pow(x2 - y4, 2));
  return s;
}
console.log(twopointsasinputs(0, 0, 5, 5));
