/* One of the biggest problems with declaring variables 
with the var keyword is that you can easily overwrite variable declarations. 
var camper = "James";
var camper = "David";
console.log(camper); = "David"
If you replace var with let in the code above, it results in an error
The error can be seen in your browser console

So unlike var, when you use let, a variable with the same name can only be declared once. */

// Update the code so it only uses the let keyword.
// var catName = 'Oliver';
// var catSound = 'Meow!';

let catName = 'Oliver';
let catSound = 'Meow!';
