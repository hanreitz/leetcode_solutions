var permute = function(nums) {
  const returnArray = []
  
  const backtrack = (nums, temp) => {
      if(temp.length === nums.length){
          returnArray.push(temp.slice())
          return
      }
      
      nums.forEach(num => {
          if(!temp.includes(num)){
              temp.push(num)
              backtrack(nums, temp)
              temp.pop()
          }
      })
  }
  
  backtrack(nums, [])

  return returnArray
};