//Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
function findNeedle(haystack) {
  let b=0;
  for (let i in haystack){
    if (haystack[i]=='needle'){b=i}
  }
  if(b!=0)return 'found the needle at position '+b;
  else return "Your function didn't return anything";
}