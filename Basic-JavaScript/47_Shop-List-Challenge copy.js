/*
Create a shopping list in the variable myList. The list 
should be a multi-dimensional array containing several 
sub-arrays.

The first element in each sub-array should contain a 
string with the name of the item. The second element should 
be a number representing the quantity i.e.
*/

const myList = [];
myList[0] = ['Chocolate Bar', 15];
myList.push(['Milk', 5]);
myList.unshift(['Tea', 2]);
myList.unshift(['Bread', 3]);
myList.push(['Butter', 2]);
myList[3] = ['Juice', 4];
console.log(myList);
