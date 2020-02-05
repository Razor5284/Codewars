function isValidWalk(walk) {
  walk = walk.join("")
  let n = walk.replace(/[^n]/gi, "").length
  let e = walk.replace(/[^e]/gi, "").length
  let w = walk.replace(/[^w]/gi, "").length
  let s = walk.replace(/[^s]/gi, "").length
  if (n == s && e == w) {
    if (n + e + s + w == 10) {return true}
    else {return false}
  } return false
}

// https://www.codewars.com/kata/54da539698b8a2ad76000228
