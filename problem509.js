// original solution
// 68 ms (faster than 91.71%); 38.6 MB (less than 42.15%)
var fib = function(n) {
  let total = 0
  let sequence = [0,1]
  for(let i = 1; i <= n; i++){
      total = sequence[i] + sequence[i - 1]
      sequence.push(total)
  }
  return sequence[n]
};