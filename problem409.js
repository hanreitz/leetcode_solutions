var longestPalindrome = function(s) {
  const sHash = {}
  
  for(let i = 0; i < s.length; i++){
      if(!!sHash[s[i]]){
          sHash[s[i]] += 1
      } else {
          sHash[s[i]] = 1
      }
  }
  
  let maxPal = 0
  
  for(let key in sHash){
      console.log(maxPal)
      if(sHash[key] % 2 === 0){
          maxPal += sHash[key]
      } else if (sHash[key] > 2){
          maxPal += sHash[key] - 1
      }
  }
  
  return maxPal < s.length ? maxPal + 1 : maxPal
};