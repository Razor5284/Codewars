function sumTwoSmallestNumbers(numbers) {
  return numbers.sort(function(a, b){return a-b}).slice(0,2).reduce((a, b) => a + b, 0)
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014
