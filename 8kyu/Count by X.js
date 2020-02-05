function countBy(x, n) {
  var z = [];
  var index = 0;
    for (i = 0; index < n; index ++) {
      i += x;
      z[index] = i;
    }
  return z;
}

// https://www.codewars.com/kata/5513795bd3fafb56c200049e
