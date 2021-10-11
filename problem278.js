var solution = function(isBadVersion) {
  return function(n) {
      let left = 1
      let right = n
      
      while(left < right){
          let middle = Math.floor((left + right)/2)
          if(isBadVersion(middle) && !isBadVersion(middle - 1)){
              return middle
          } else if(isBadVersion(middle)){
              right = middle      
          } else {
              left = middle + 1
          }
      }
      return right
  };
};