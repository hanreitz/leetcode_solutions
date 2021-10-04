// original submission
// 476 ms (faster than 7.14%); 44.7 MB (less than 60.00%)
const longestNiceSubstring = s => {
  // let currentString = ''
  let longestNiceString = ''
  
  for(let i=0; i <= s.length - 2; i++){
      let subsetLength = 2 + i
      for(let j=0; j <= s.length - subsetLength; j++){
          let subset = s.slice(j,j + subsetLength)
          // subset is strings length 2, 3, etc.
          let lettersInSubset = (subset.split(''))
          let niceLetters = lettersInSubset.filter(letter => (subset.includes(letter.toUpperCase()) && subset.includes(letter.toLowerCase()))? letter : '')
          let subsetArray = subset.split('')
          if(JSON.stringify(niceLetters) === JSON.stringify(subsetArray) && subset.length > longestNiceString.length){
              longestNiceString = subset
          }
      }
  }
  return longestNiceString
};