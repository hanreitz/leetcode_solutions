var letterCasePermutation = function(s) {
  const returnArray = []
  let temp = ''
  
  const backtrack = idx => {

      for(let i = idx; i < s.length; i++){
          if(s[i] >= 0 && s[i] <= 9){
              temp += s.charAt(i)
          } else {
              let prev = temp
              temp += s[i].toLowerCase()
              backtrack(i + 1)
              temp = prev
              temp += s[i].toUpperCase()
          }
      }
      returnArray.push(temp)
  }
  
  backtrack(0)
  
  return returnArray
};