//Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case val="a":
      answer="apple";
      break;
    case val="b":
      answer="bird";
      break;
    case val="c":
      answer="cat";
      break;
    default:
      answer="stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);