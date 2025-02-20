// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

// MY SOLUTION

function replace(s) {
    //coding and coding....
     let lettersToReplace = "aeiouAEIOU";  
      let symbol = "!";  
      let regex = new RegExp(`[${lettersToReplace}]`, 'g'); 
      return s.replace(regex, symbol); 
  }