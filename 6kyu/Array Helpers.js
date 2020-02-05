// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function() {
  let output = []
  for (let i = 0; i < this.length; i++) {
    output.push(Math.pow(this[i],2))
  }
  return output
}

Array.prototype.cube = function() {
  let output = []
  for (let i = 0; i < this.length; i++) {
    output.push(Math.pow(this[i],3))
  }
  return output
}

Array.prototype.sum = function() {
  return output = this.reduce((a, b) => a + b, 0)
}

Array.prototype.average = function() {
  return output = this.reduce((a, b) => a + b, 0) / this.length
}

Array.prototype.even = function() {
console.log(this)
  let output = []
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) output.push(this[i])
  }
  return output
}

Array.prototype.odd = function() {
console.log(this)
  let output = []
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) output.push(this[i])
  }
  return output
}
