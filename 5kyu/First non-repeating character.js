// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  if (s.length == 1) return s
  let u = s.toLowerCase()
  let t = u.split("").find(n => u.indexOf(n) == u.lastIndexOf(n))
  var y = s.search(new RegExp(t, "i"));
  if (y === 0) return ""
  y = s.charAt(y)
  return y
}
