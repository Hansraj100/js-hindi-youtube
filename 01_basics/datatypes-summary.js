//#PRIMITIVE DATATYPE
//7// String,Number,Boolean,Null,Undefined,Symbol,BigInt
// let name = "hansraj"//string
// const  score = 33//number
// const score1 = 33.5//number
// const isLoggedIn = true// boolean
// const outsideTemp = null//null
// let userEmail;//undefined
// const id = Symbol('123') 
// const newId = Symbol('123')
// console.log(id===newId);
//#NON PRIMITIVE(REFERENCE)
//1-ARRAY , 2-OBJECT , 3-FUNCTION
// const heroesArray = [shaktiman , nagraj , spiderman]//ARRAY
// let myObject = {
//     name:"hansraj"
//     age:23
// }
// onst myFunction = function(){
//     console.log("hello world");
// }c

//*---------------------------------------------------------------------------------------------------
// stack(primitive) , heap(non primitive)
//EXAMPLE OF STACK 
// let myutubeName = "hansrajpanwar100@gmail.com"
// let anotherName = myutubeName
// anotherName = "vanshrajpanwar100@gmail.com"
// console.log(myutubeName);
// console.log(anotherName);
//EXAMPLE OF HEAP
let userOne = {
    email: " hansrajpanwar100@gmail.com",
    upi: "user@upi"
}
let userTwo = userOne
userTwo.email = "vanshrajpanwar100@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);