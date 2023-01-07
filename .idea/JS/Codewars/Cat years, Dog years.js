//Kata Task
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears==1) var catYears=15,DogYears=15;
  if (humanYears==2) catYears=24,DogYears=24;
  if (humanYears==3) catYears=28,DogYears=29;
  if (humanYears>3)  catYears=28+4*(humanYears-3),DogYears=29+5*(humanYears-3);
  return [humanYears,catYears,DogYears];
}