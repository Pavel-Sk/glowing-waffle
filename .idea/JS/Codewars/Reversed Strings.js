//Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
  let a='';
  for (let i =0 ;i<str.length;i++){
    a=str[i]+a;
  }
  return a;
}