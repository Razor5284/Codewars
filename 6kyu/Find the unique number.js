function findUniq(arr) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i+1]) continue
    else if (arr[i] === arr[i+2]) return arr[i+1]
    else if (arr[i+1] === arr[i+2]) return arr[i]
  }
}

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
