// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b){
console.log(r,g,b)
  let r2 = '', g2 = '', b2 = ''
  if (r < 255 && r > 0 ) {
    if (r <= 16) r2 = '0'
    r2 += r.toString(16).toUpperCase()
  }
  else if (r >= 255) r2 = 'FF'
  else r2 = '00'
  if (g < 255 && g > 0 ) {
    if (g <= 16) g2 = '0'
    g2 += g.toString(16).toUpperCase()
  }
  else if (g >= 255) g2 = 'FF'
  else g2 = '00'
  if (b < 255 && b > 0 ) {
    if (b <= 16) b2 = '0'
    b2 += b.toString(16).toUpperCase()
  }
  else if (b >= 255) b2 = 'FF'
  else b2 = '00'
  return r2+g2+b2
}