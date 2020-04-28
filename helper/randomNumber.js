function randomNumberWithSum(max, thecount) {
  var r = [];
  var currsum = 0;
  for (var i = 0; i < thecount; i++) {
    r.push(Math.random());
    currsum += r[i];
  }
  for (var i = 0; i < r.length; i++) {
    r[i] = Math.round((r[i] / currsum) * max);
  }
  return r;
}

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = { randomNumberWithSum, randomNumber };
