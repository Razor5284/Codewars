// https://www.codewars.com/kata/5318f00b31b30925fd0001f8/

var numberToPrice = function(number) {
  if (!Number.isFinite(number)) return 'NaN'
  number = number.toFixed(3).split("").reverse()
  let pos = number.lastIndexOf("."), count = 0
  if (pos >= 3) number.splice(0, pos - 2)
  for (let i = 2; i < number.length - 1; i++) {
    let int = Number.parseInt(number[i + 1 + count])
    if ((i == 5) && (Number.isInteger(int))) {
      number.splice(i+1, 0, ",")
    }
    if ((i > 6) && (i % 3 == 0) && (Number.isInteger(int))) {
      count++
      number.splice(i+1, 0, ",")
    }
  }
  return number.reverse().join("")
}