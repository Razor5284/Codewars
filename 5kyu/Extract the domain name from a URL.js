// https://www.codewars.com/kata/514a024011ea4fb54200004b/

function domainName(url){
  url = url.replace("http://", "").replace("www.", "").replace(".com", "").replace("https://", "")
  let slashPos = url.search("/"), dotPos = url.search(/\./g)
  if (slashPos != -1) url = url.slice(0, slashPos)
  if (dotPos != -1) url = url.slice(0, dotPos)
  return url
}