// can assume input has solution and ONLY one

// original submission fn declaration - 580 ms (faster than 5.00%); 45.1 MB (less than 5.06%)
// fn declaration was faster than arrow fn; memory use was the same
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      let restOfNums = nums.slice(i + 1)
      let foundIndex
      restOfNums.find(function(value, index) {
          if(value + nums[i] === target){
              foundIndex = index + i + 1
          }
      })
      if(foundIndex){
          return [i, foundIndex]
      }
  }
};

// refactor fn declaration - 213 ms (faster than 12.03%); 38.5 MB (less than 99.54%)
// fn declaration was faster and less memory than arrow fn
var twoSum = function(nums, target){
  for(let i = 0; i < nums.length; i++){
      if(nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i){
          return [i, nums.indexOf(target - nums[i])]
      }
  }
}