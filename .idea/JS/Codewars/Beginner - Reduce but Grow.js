//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  let sum = 1;
  if (x.length) {
    sum = x.reduce((a, b) => {
      return (parseFloat(a) || 0) * (parseFloat(b) || 0);
    });
  } else {
    sum = 0;
  }
  return sum;
}
