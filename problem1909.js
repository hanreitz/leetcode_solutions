// original solution - clunky but functioning

var canBeIncreasing = function(nums) {
    
  for(let i = 0; i <= nums.length - 1; i++){
      // make a new array 'missing' the value at i
      let newArray = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)]
      
      // check for repeats and for sorting
      if(newArray.length === [...new Set(newArray)].length && newArray.toString() === newArray.sort((a,b) => a - b).toString()){
          return true
      }
  }
  // if it repeats or can't be sorted with a single value removed, return false
  return false
};

// better solution - represents how this type of problem should be structured

var canBeIncreasing = function(nums) {
  let counter = 0;
  let test = [3,4,1,5,7]
  for(let i = 1; i < nums.length && counter < 2; i++){
      if(nums[i] <= nums[i - 1]){
          counter++
          if(nums[i] <= nums[i - 2]){
              nums[i] = nums[i - 1]
          }
      }
  }
  return counter < 2
};