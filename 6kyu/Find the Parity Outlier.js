function findOutlier(integers){
  let odd = integers.filter((number) => number%2!==0)
  let even = integers.filter((number) => number%2==0)
  if (odd.length === 1) {return parseInt(odd)}
  else {return parseInt(even)}
}
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
