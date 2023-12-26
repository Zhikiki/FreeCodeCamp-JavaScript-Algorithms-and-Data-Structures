/* Like let, variables initialised wit const can't be initialised twice
variables declared using const are read-only. They are a constant value, 
which means that once a variable is assigned with const, it cannot be reassigned 

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error  */

// Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.
// var fCC = "freeCodeCamp"; // Change this line
// var fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(fCC, fact); // Change this line


const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line