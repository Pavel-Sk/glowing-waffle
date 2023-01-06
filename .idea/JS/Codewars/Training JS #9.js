//Complete function padIt, which accepts 2 parameters:
// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
function padIt(str,n){
  let count=0;
  do{str="*"+str; count++;
    if (count<n) { str = str + "*"; count++;}
  }while (count<n);
  return str;
}