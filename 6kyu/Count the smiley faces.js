// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i].split("")
    if (s[0] == ":" || s[0] == ';') {
      if (s[1] == "D" || s[1] == ")") count++
      else if ((s[1] == "-" || s[1] == "~") && (s[2] == "D" || s[2] == ")")) count++
    }
  } return count
}
