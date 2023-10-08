function sayMyName(){
console.log("h");
console.log("a");
console.log("n");
console.log("s");
console.log("r");
console.log("a");
console.log("j");
}
//sayMyName()
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
function addTwoNumbers(number1,number2){
   // const result = number1 + number2
  //return result 
  return number1 + number2
}
const result = addTwoNumbers(3,5)
//console.log("result: ",result);
function userJustLoggedIn(username){
    if(username===undefined){
    console.log("plesase enter username");
    return
    }
    return`${username} just logged in`
}
//console.log(userJustLoggedIn());

//ADDING MORE MUMBERS IN FUNCTIONS LIKE ADDING MORE ITEMS IN CART USING REST operator
 function addMoreNumbers(val1,val2,...num1){  //this val1 and val2 will be removed 
    return num1
 }
// console.log(addMoreNumbers(200,400,800));
//object
const user = {
    name:"hansraj",
    username:"hansraj",
    price:"8000"
}
function anyobject(A){
    console.log("my username is", A.username, "and price is" ,A.price);
}
console.log(anyobject(user));

