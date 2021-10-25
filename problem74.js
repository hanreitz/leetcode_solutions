const findInRow = (finalRow, target) => {
  while(finalRow.length > 1){
      let fL = Math.floor((finalRow.length) / 2)
      finalRow = finalRow[fL] > target ? finalRow.slice(0,fL) : finalRow.slice(fL, finalRow.length)
  }
  return finalRow[0] === target
}

var searchMatrix = function(matrix, target) {    
  let mL = Math.floor((matrix.length) / 2)

  if(mL === 0){
      return findInRow(matrix[0], target)
  }
  
  let toSearch = matrix[mL][0] > target ? matrix.slice(0,mL) : matrix.slice(mL, matrix.length)
  
  while(toSearch.length > 1){
      let sL = Math.floor((toSearch.length) / 2)
      toSearch = toSearch[sL][0] > target ? toSearch.slice(0,sL) : toSearch.slice(sL, toSearch.length)
  }
  
  return findInRow(toSearch[0], target)
};