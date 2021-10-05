// original submission
// 80 ms (faster than 74.85%); 40.5 MB (less than 56.44%)
const countGoodSubstrings = s =>{
  const length = 3
  let numberOfGoods = 0
  
  const substrings = []
  for(let i=0; i<=s.length - length; i++){
      const substring = s.slice(i,i+length)
      substrings.push(substring)
  }
  substrings.forEach(sub => {
      const uniqueLetters = [...new Set(sub.split(''))]
      if(uniqueLetters.length === length){
          numberOfGoods++
      }
  })
  return numberOfGoods
};