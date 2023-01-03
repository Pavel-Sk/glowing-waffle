//Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else,
// if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
    function trueOrFalse(val){
  if (val===false || val==false || val==0|| val==-0|| val==""|| val==null|| val==undefined||val== NaN)
    return "false";
  else  return "true";
}