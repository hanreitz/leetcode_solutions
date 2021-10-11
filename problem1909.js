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