function getCount(str) {
  str = str.match(/(a|e|i|o|u)/gi)
  if (str !== null && str.length !== 0) return str.length
  return 0
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
