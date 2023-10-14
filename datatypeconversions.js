let score = 33//this is a number we know because we are at frontend but what have been stored at the backend in the score variable is not confirmed 
console.log(typeof score);//output is number 
console.log(typeof(score));
// example 1 - declare a variable string and convert it into the number datatype 
let score1 = "33abc"
console.log(typeof score1);
console.log(typeof(score1));//output in both is string
//method to convert string into datatype 
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);//output is number
//in above the value of score variable is string and we have converted the value of that in number but let us check what is the value of score 1 variable if it is conveted to number
console.log(valueInNumber);//output is NaN .NaN is also a special type we is given in place of value of converted string into number 
//example 2 - declare a variable and assign value null to it and convert it into a number and then output the value of that new variable created 
let score2 = null
console.log(typeof score2);//output is object
//lets create a new variable and convert it into number 
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber);//output is number
console.log(valueInNumber2);// output is zero(0),value in the number variable is 0
//example 3 - convert a undefined into number and check its value 
let score3 = undefined
console.log(typeof score3);//output is undefined
//convert undefined into number 
let valueInNumber3 = Number(score3); 
console.log(typeof valueInNumber);//output is number
console.log(valueInNumber);//output is NaN 
//example 3 - convert boolean into number 
let score4 = true
console.log(typeof score4);//output is boolean
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);//output is 1

//example 4 - convert a number 1 into boolean and find its value 
let isLoggedIn = 1 //""it is false and "hansraj" is true in this conversion 
console.log(typeof isLoggedIn);//output is number 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);//output is boolean 
console.log(booleanIsLoggedIn);//output is true , and this proves that it is boolean value 
//conversion of number into string 
let someNumber = 33
let valueInString = String(someNumber);
console.log(typeof valueInString);//output is string 
console.log(valueInString);// output is 33 (the value that is stored in string is 33)
 