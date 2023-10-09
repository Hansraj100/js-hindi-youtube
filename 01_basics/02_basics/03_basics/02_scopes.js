
if(true){
    let a = 10
const b = 20 
var c = 30
}
// console.log(a);
// console.log(b);
//console.log(c);//THIS WILL PRINT 30 IN TERMINAL WHICH IS THE PROBLEM SO WE SHOULD NOT USE VAR
let a = 500
var b = 600
if(true){
let a = 10
var b = 50
// console.log("inner: ", b)
}
//console.log(a);
//console.log(b);
//********THE TYPE OF SCOPE WE ARE GETTING IN WINDOWS IS DIFFERENT FROM CODE ENVIRONMENT SCOPE 
//we will learn about core  scope in further videos
//*********************NESTED SCOPE********************************
function one(){
    // userName = "hansraj panwar"

    function two(){
        const website = "youtube"
        //console.log(userName);//ander ka function bahr ke variables ko excess kr pata ha
    }
    // console.log(website);
    two()
} 
one()

if(true){
    const userName = "hansraj"
    if(userName === "hansraj"){
        const website = " youtube"
       // console.log(userName  + website);
    }
    // console.log(website);
}
// console.log(userName);
// **********************INTERESTING*********************************
console.log(addone(5));
function addone(num){
    return num + 1
}
addtwo(5) // this is the big mistake as can not do this in declaring variable with function THIS IS CALLED HOISTING 
const addtwo = function(num){    // many time this is called expression
    return num + 2
} 
