// not a working solution BUT does correctly fill around the starting pixel

var floodFill = function(image, sr, sc, newColor) {
  let colorMatch = image[sr][sc]
  let row = sr
  let col = sc
  
  const checkSides = function(row, col) {
      console.log('sides', row, col)
      if(col > 0 && image[row][col - 1] === colorMatch){
          image[row][col - 1] = newColor
          col = col >= 1 ? col - 1 : col
          checkSides(row,col)
          checkTopBottom(row,col)
      } else if(col < image[sr].length - 1 && image[row][col + 1] === colorMatch){
          image[row][col + 1] = newColor
          col = col <= image[sr].length ? col + 1 : col
          checkSides(row,col)
          checkTopBottom(row,col)
      }
  }
  
  const checkTopBottom = function(row, col) {
      console.log('topbottom', row, col)
      if(row > 0 && image[row - 1][col] === colorMatch){
          image[row - 1][col] = newColor
          row = row >= 1 ? row - 1 : row
          checkSides(row, col)
          checkTopBottom(row, col)
      } else if(row < image.length - 1 && image[row + 1][col] === colorMatch){
          image[row + 1][col] = newColor
          row = row <= image.length ? row + 1 : row
          checkSides(row, col)
          checkTopBottom(row, col)
      }
  }
  
  checkSides(row,col)
  checkTopBottom(row,col)
  
  
  return image
};

// working solution using recursion

var floodFill = function(image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if(typeof image[sr] === 'undefined' || typeof image[0][sc] === 'undefined' || image[sr][sc] !== oldColor || image[sr][sc] === newColor) {
      return image
  }

  image[sr][sc] = newColor

  floodFill(image, sr + 1, sc, newColor, oldColor)
  floodFill(image, sr - 1, sc, newColor, oldColor)
  floodFill(image, sr, sc + 1, newColor, oldColor)
  floodFill(image, sr, sc - 1, newColor, oldColor)

  return image
};