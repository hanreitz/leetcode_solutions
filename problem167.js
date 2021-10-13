// two-pointer solution for finding two numbers that add to a target in an inc sort array
var twoSum = function(numbers, target) {
  let left = 1;
  let right = numbers.length
  
  while(numbers[left - 1] + numbers[right - 1] !== target){
      if(numbers[left - 1] + numbers[right - 1] < target){
          left++
      } else {
          console.log(right)
          right--
      }
  }
  
  return[left, right]
};