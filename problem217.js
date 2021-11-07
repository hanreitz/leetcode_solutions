var containsDuplicate = function(nums) {
  let numHash = {}
  
  for(let i = 0; i < nums.length; i++){
      if(numHash[nums[i]] === 1){
          return true
      }
      numHash[nums[i]] = 1
  }
  
  return false
};