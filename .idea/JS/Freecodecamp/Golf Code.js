//Your function will be passed par and strokes arguments.
// Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest)
//par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(par==1 || strokes==1){return names[0]}
  else if (strokes<= par - 2){return names[1]}
  else if (strokes==par - 1){return names[2]}
  else if (par==strokes){return names[3]}
  else if (strokes==par + 1){return names[4]}
  else if (strokes==par + 2){return names[5]}
  else if (strokes>= par + 3	){return names[6]}
  else  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);