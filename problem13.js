// first submission
// function declaration: 139 ms (faster than 86.62%), 45 MB (less than 53.58%)
// arrow function: 250 ms (faster than 19.61%), 44.7 MB (less than 64.12%)
// function declaration is better for the big speed increase
var romanToInt = function(s) {
  const numHash = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let runTotal = 0
  let currentNum = 0
  let nextNum = 0
  for(let i = 0; i < s.length; i++){
      currentNum = numHash[s.charAt(i)]
      nextNum = numHash[s.charAt(i + 1)]
      if(nextNum === undefined || currentNum >= nextNum){
          runTotal += currentNum
      } else {
          runTotal -= currentNum
      }
  }
  return runTotal
};