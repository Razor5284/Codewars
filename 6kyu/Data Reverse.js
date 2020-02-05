function dataReverse(data) {
  let output = []
  while (data.length !== 0) {
    output.push(data.splice(data.length - 8, 8))
    output = [].concat(...output);
  }
  return output
}

// https://www.codewars.com/kata/569d488d61b812a0f7000015
