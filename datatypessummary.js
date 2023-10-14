//primitive datatypes
//7types(string ,number,boolean ,null,undefined,symbol,bigInt)
// Non -primitive datatypes
// 3types(Array,function,Objects)
// Question1-javascript is adynamically types language or statically typed language?
// Answer-javascript is a dynamically typed language which means that datatypes of variables are determined by the value they hold at runtimeand can change throughout the 
//program as we assign different value to them
//but in type script - const score:number = 100
const score =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;//(undefined)
//or
let useremail = undefined
//SYMBOL DECLARATION
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //output is false 
//ARRAY
const heroes = ["shaktiman","naagraj","spiderman"]
//OBJECT 
const myObject = {
    name:"hansraj",
    age:23,
}
//or
// {
//     name:"hansraj",
//     age:23
// }
//1-object uses curly braces
//2-object have key value pair
//3-:separates key value pair
//FUNCTION
const myfunction = function(){
    console.log("hello world")
}
// how to konw the type of datatype 
console.log(typeof isLoggedIn);
