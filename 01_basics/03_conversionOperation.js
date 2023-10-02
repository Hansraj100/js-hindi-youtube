// conversion of datatypes into numbers
let score = "33"
// console.log(typeof score);
// console.log(typeof(score));
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
//"33"=>33
//"33ABC"=>NaN
//True=>1,False=>0
//null=>0 but it is object
let isLoggedIn = "hansraj"
let booleanIsLoggedIn = Boolean( isLoggedIn)
// console.log(booleanIsLoggedIn);
// conversion of datatypes into boolean
// 1=>true,0=>false
// ""=>false,"hansraj"=>true
let someNumber = 33
let StringNumber = String(someNumber)
// console.log(StringNumber );
// console.log(typeof StringNumber);
//*********0PERATIONS*************/
let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2)
// console.log(2-2)
//console.log(2*2)
// console.log(2**2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)
//THIS IS HOW STRINGS CAN BE CONCATINATE
let str1 = "hansraj"
let str2 = " panwar"
let str3 = str1 + str2
// console.log(str3);
// THIS IS WHERE THE PROBLEM ARISES
// console.log( "1" + 2);
// console.log( 1 + "2");
// console.log( "1" + 2 +2);
//IN THIS WE SEE THAT , THE FIRST TYPE IS USED IN WHOLE AND IT IS TREATED AS SAME
// console.log( 1 + 2 + "2")//ANSWER=32
//WE ARE ADVISED TO USE PARENTHESIS FOR GOOD PROGRAMMING OF JAVASCRIPT
// console.log( "1" + 2);
// console.log( 1 + "2");
// console.log( "1" + 2 +2);
//console.log((2 + 4) * 4 % 5);
// console.log(true);
// console.log(+true);//answer= 1
// console.log(true+);//answer=expected error
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2;

//SMALL OPERATION 
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

