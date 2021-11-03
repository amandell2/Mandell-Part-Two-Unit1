/*
Step 1: Prompt user for pet's name
Step 2: Use a loop to repeat 6 times (prompt user for an action)
    -All levels start at 0
    -Feed-increases energy by 2
    -Pet-increases happiness by 1
    -Walk-increases happiness by 2, decreases energy by 1
Note: if a user chooses walk but energy is at 0 "Not enough energy to enjoy a walk"
Step 3: After 6 actons: log the pet's name, happiness, and energy level to console: " _______ has __ happiness and __ energy."
*/

const Pet = prompt ("Name your pet");
document.write(Action);
let Energy = 0;
let Happiness = 0;
document.write(Energy);
document.write(Happiness);
for (i=0; i<6; i++){
var Action = prompt ("feed, pet, or walk?");
    if (Action === "feed") {
Energy = (Energy + 2);
   } else if (Action === "pet") {
Happiness = (Happiness + 1);

   } else if (Action === "walk"){
       if(Energy == 0){alert("Not enough energy to enjoy a walk");}
    else {
    Happiness = ( Happiness + 2); 
    Energy = (Energy - 1);
   }
} 
console.log(Action)}; 
console.log (Pet)
console.log (Happiness)
console.log (Energy)
console.log( Pet + " has " + Happiness + " happiness and " + Energy + " energy."); 
document.write( Pet + " has " + Happiness + " happiness and " + Energy + " energy."); 