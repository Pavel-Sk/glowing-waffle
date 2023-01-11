//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending){
  let c = '';
  for (let i=[str.length-ending.length];i<str.length;i++){
    c+=(str[i]);
  }
  return(c==ending);
}