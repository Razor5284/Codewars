// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc
  let end = cc.split("").reverse().join("").substring(0, 4).split("").reverse().join("")
  let hashed = ""
  for (let i = 0; i < (cc.length - 4); i++) {hashed += "#"}
  let masked = hashed + end
  return (masked)
}
// https://www.codewars.com/kata/5412509bd436bd33920011bc
