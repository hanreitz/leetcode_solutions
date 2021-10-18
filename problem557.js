var reverseWords = function(s) {
  let returnString = ''
  let currentWord = ''
  
  for(let char of s){
      if(char === ' '){
          returnString += currentWord + char
          currentWord = ''
      } else {
          currentWord = char + currentWord
      }
  }
  
  return returnString + currentWord
};