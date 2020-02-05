// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
  for (let i = 0; i < arr.length; i++) {
    let count = 1
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue
      if (arr[i] === arr[j]) {
        count++
        if (count > n) {
          arr.splice(j, 1)
          j--
          count--
        }
      }
    }
  } return arr
}
