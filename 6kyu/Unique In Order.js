var uniqueInOrder=function(iterable){
  let uniques = []
  for (let i = 0; i < iterable.length; i++){
    if (iterable[i] === iterable[i+1]) continue
    else uniques.push(iterable[i])
  } return uniques
}

// https://www.codewars.com/kata/54e6533c92449cc251001667
