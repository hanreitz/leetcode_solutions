var combine = function(n, k, index = 1, temp = [], returnArray = []) {
  if(temp.length === k){
      returnArray.push(temp)
      return returnArray
  }
  
  for(let i = index; i <= n; i++){
      let modTemp = [...temp, i]
      combine(n, k, i + 1, modTemp, returnArray)
  }
  
  return returnArray
};