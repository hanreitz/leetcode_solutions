 const lengthOfLongestSubstring = s => {
  let length = 0
  
  // need to make a window that expands until it hits a non-unique letter

  let uniqueArray = []
  // uniqueArray tracks the letters in the string until one repeats
  
  for (let i=0; i < s.length; i++){
      let currentCharacter = s.charAt(i)
      if(!uniqueArray.includes(currentCharacter)){
          uniqueArray.push(currentCharacter)
          
          // every time uniqueArray gets larger, the loop checks if its size is 
          // greater than the current length
          
          if(uniqueArray.length > length){
              length = uniqueArray.length
              // if so, it sets the length to its current value
          }   
      } else {
          // when a repeat occurs, uniqueArray is reset to an array containing only the most recent letter
          let lengthToEnd = s.length - i - 1
          if(lengthToEnd < length){
              i = s.length - 1
          } else {
            uniqueArray = []
            i = s.indexOf(currentCharacter) 
          }
      }
  }
  return length
};

lengthOfLongestSubstring('aslongastherearenonumbersthisworksfine')