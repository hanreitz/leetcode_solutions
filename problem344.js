// original solution 
// 186 ms (faster than 11.58%); 45.6 MB (less than 89.40%)
var reverseString = function(s) {
  for(let i = 0; i < s.length/2; i++){
      let rightIndex = (s.length - 1 - i)
      let right = s[rightIndex]
      let left = s[i]
      s[rightIndex] = left
      s[i] = right
  }
};