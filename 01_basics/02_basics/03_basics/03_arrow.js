//THIS IS THE BASIC OF this KEYWORD
const user = {
  //  username:"hansraj",
    price:900,
    welcomeMessage:function(){
       // console.log(`${this.username} , welcome to this website`);
        //console.log(this);//to print the whole 
    }
}
//user.welcomeMessage()
//TO CHANGE THE CONTEXT 
//user.username = "vanshraj"
//user.welcomeMessage()
//console.log(this);//this will give {} in the terminal bcz there is no global object in the node and this will give empty object
// function chai(){
//     let username = "hansraj"
//     console.log(this.username);
// }
// chai()
//DECLARING FUNCTIONS SPECIALLY THROUGH ARROW FUNCTIONS 
//const chai = function(){
  //  let username = "hansraj"
    //console.log(this.username);
//}
//THIS IS ARROW FUNCTION 
const chai= () => {
        let username = "hansraj"
        console.log(this.username);
    }
   // chai()
   //BASIC ARROW FUNCTION
  // () =>{
    //return num1 + num2 
   //}
  // console.log(addtwo(3,2));
   //IMPLICIT RETURN(IMPLICIT means "me maan leta hun apko likhne ki jorurat ni ha")
  // const addtwo = (num1,num2)=>(num1 + num2)
//console.log(addtwo(2,3));
//HOW TO RETURN OBJECT 
const addtwo = (num1c,num2)=>({username:"hansraj"});
console.log(addtwo(3,4));