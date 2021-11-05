var reverseVowels = function(s) {
  const checkVowel = letter => {
      return letter.match(/[aeiouAEIOU]/) !== null ? true : false
  }
  
  let t = s.split('')
  let left = 0
  let right = t.length - 1
  
  while(left < right){
      if(checkVowel(t[left]) && checkVowel(t[right])){
          [t[left], t[right]] = [t[right], t[left]]
          left++
          right--
      } else if(checkVowel(t[left])){
          right--
      } else if(checkVowel(t[right])){
          left++
      } else {
          left++
          right--
      }
  }
  
  return t.join('')
};