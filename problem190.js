var reverseBits = function(n) {
  let result = 0;
  
  for(let i = 0; i < 32; i++) {    
      result <<= 1;  
      result |= n & 1;  
      n >>= 1;
  }
  
  return result >>> 0; // takes care of the sign if present - assigns the sign to zero and shifts the result 0 spaces
  // to the right
};