// no looping, no recursion solution
// standard fn: 122 ms runtime (better than 23.65%); 40 MB memory use (better than 76.15%)
// arrow fn: 80 ms runtime (better than 93.17%); 40.1 MB memory use (better than 76.15%)
// arrow fn is better
// best overall solution
const isPowerOfTwo = n => Number.isInteger(Math.log2(n))

// looping solution
// standard fn: 121 ms runtime (better than 24.04%); 39.9 MB memory use (better than 90.58%)
// arrow fn: 84 ms runtime (better than 85.67%); 40.5 MB memory use (better than 8.46%)
// standard fn seems like the better of the two options, but only slightly
const isPowerOfTwo = function(n){
  if(n <= 0) return false
  if(n === 1) return true
  for(let i = n; i >= 2; i /= 2){
      if(i % 2 !== 0){
          return false
      } else if(i === 2) {
          return true
      }
  }
};

// recursive solution
// standard fn: 149 ms runtime (better than 9.71%); 39.9 MB memory use (better than 90.58%)
// arrow fn: 115 ms runtime (better than 28.08%); 39.5 MB memory use (better than 98.27%)
// arrow fn is better on both!
const isPowerOfTwo = n => {
  if(n === 1) return true
  if(n <= 0 || n % 2 !== 0) return false
  return isPowerOfTwo(n/2)
}