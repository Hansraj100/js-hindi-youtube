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
console.log(userJustLoggedIn());

