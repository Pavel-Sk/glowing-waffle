function trueOrFalse(val){
  if (val===false || val==false || val==0|| val==-0|| val==""|| val==null|| val==undefined||val== NaN)
    return "false";
  else  return "true";
}