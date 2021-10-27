var climbStairs = function(n) {
  // step # is one index behind Fibonacci
  const newArray = new Array(n + 1).fill(1)
  
  for(let i = 2; i <= n; i++){
      newArray[i] = newArray[i - 1] + newArray[i - 2]
  }
  
  return newArray[n]
};