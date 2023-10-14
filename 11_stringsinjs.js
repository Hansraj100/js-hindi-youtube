const name = "hansraj"
const repoCount = 50
//concatination 
console.log(name+repoCount+" value");// this is the outdated method and not good method in js 
//we will use backtics in js for string interpolation with the help of which we make placeholders
console.log(`hello, my name is ${name} and my repocount is ${repoCount}`);//output is my name is hansraj and my repo count is 50
//new way to declare string 
const gameName = new String('hansraj')// in this method when we run this method in console and run gameName ,then we get string {'hansraj} with key value pair of each character of length 7 and also many prototype methods and functions.
// mastering all this methods is our aim towards 
console.log(gameName[0]);//output is h
console.log(gameName.__proto__);6//output is all the functions and methods related to this method of string.basically this is the object which is not empty (prototype)
console.log(gameName.length);//output is 8
console.log(gameName.toUpperCase());//output is HANSRAJ
console.log(gameName.charAt(2));// output is n
console.log(gameName.indexOf('h'));//output is 8
// making substring in js 
const newString = gameName.substring(0,4)//this will not obey negative value
console.log(newString);//output is hans(note that it will give output upto index number 3(4-1))
 //slicing in js 
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
//trim function in js on string
const newStringOne = "          hansraj   "
console.log(newStringOne);// output is       hansraj 
console.log(newStringOne.trim());//output is hansraj
//replace function on string in js
const url = "https://hansraj_panwar_100@gmail.com"
console.log(url.replace('raj','baj'));// output is hansbaj100@gmail.com
// fetching data from string 
console.log(url.includes('hansraj'));//output is true
// using split method in js  
console.log(url.split('_'));//output is ['https://hansraj','panwar','100@gmail.com']