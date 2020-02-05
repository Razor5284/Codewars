// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j]
    }
  }
}

/* Refactored from:
function twoSum(numbers, target) {
  let output = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) continue
      if (Number.isInteger(numbers[i]) && Number.isInteger(numbers[j])) {
        if (numbers[i] + numbers[j] === target) {
          output.push(i, j)
          return output
        }
      }
    }
  }
} 
*/
