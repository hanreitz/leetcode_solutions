var hammingWeight = function(n) {
  let ham = 0
  while(n){
      ham++
      n &= (n - 1)
  }
  return ham
};