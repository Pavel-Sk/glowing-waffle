//Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High
//
// Note: You will need to have a case statement for each number in the range.
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:val=1
    case 2:val=2
    case 3:val=3
      answer = "Low";
      break;
    case 4:val=4
    case 5:val=5
    case 6:val=6
      answer = "Mid";
      break;
    case 7:val=7
    case 8:val=8
    case 9:val=9
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}
sequentialSizes(1);