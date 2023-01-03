//Convert the switch statement into an object called lookup.
// Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
  result = val + result;
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result=lookup[result];
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");