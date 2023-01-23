//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
  let res=0;
  for(let i in args){
    res+=args[i];
    console.log(res);
  }
  return res;
}

console.log(sum(0,1,2));