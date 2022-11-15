function isOdd(n) {
  if (n % 2 == 1) {
    return true
  }
  else{
    return false
  }
}



function isEven(n) {
  if (n % 2 == 0) {
    return true
  }
  else{
    return false
  }
}

module.exports = {
  isOdd,
  isEven
}