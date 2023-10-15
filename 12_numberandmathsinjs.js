const score = 400
console.log(score);//output is 400
const balance = new Number(1000)
console.log(balance);//output is number(1000).it is having lot of functions and methods

console.log(balance.toString());//this will convert numbert 1000 to string 
console.log(typeof balance);//output is Object 
console.log(balance.toString().length);//output is 4
console.log(balance.toFixed(2));//output is 1000.00
console.log(balance.toFixed(1));//output is 1000.0

const otherNumber = 121.789
console.log(otherNumber.toPrecision(3));//output is 122

const hundreds = 1000000
console.log(hundreds.toLocaleString());//output is 1,000,000//this  means that this toLocaleString function can represent , to the numbers 
// making , according to indian standards 
console.log(hundreds.toLocaleString('en-IN'));//output is 10,00,000


// ****************************maths********************************
//math library comes in javascript that is very interesting 
console.log(Math);//it have lot of functions available in maths in the console section
console.log(Math.abs(-5));//output is 5
console.log(Math.round(4.6));//output is 5
console.log(Math.ceil(5.2));//output is 6
console.log(Math.floor(4.5));//output is 4
console.log(Math.min(1,2,3,4,5));
 //this maths library will be used in the random number 
 console.log(Math.random());//output is 0.8450315169416329
 console.log(Math.random()*10);//output is 4.807866360299656
 //we multiple by 10 because initial value is in the range of 0 to 1(between 0 and 1 ) but we want value in between 1 to 10.
 //but in the above multiplication we also face a problem that it could be 0.0123456,this is the problem which can be solved by adding 1
 console.log((Math.random() * 10) + 1);//output is  ***10.90077383838********
 console.log(Math.floor(Math.random()*10+1));
 const min = 10
 const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)));
