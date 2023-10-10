// const userEmail = "hansrajpanwar100@gmail.com"
// if(userEmail){
//    console.log("got the user email");
// }else {
//     console.log("dont get useremail");
// }
//SUPPOSE IF WE PROVIDE ANY THING LIKE STRING ,EMPTY STRING ,ARRAY AND EMPTY ARRAY IN THE CONDITION WE GET LET SEEE
//ALLOCATING EMPTY STRING
// const userEmail = ""
// if(userEmail){
//     console.log("got the user email");
// }else {
//     console.log("dont get user email");
// }
//ALLOCATING ARRAY
// const userEmail = []
// if(userEmail){
//     console.log("got the user email");
// }else {
//     console.log("dont get user email");
// }

//FOR THIS WE HAVE TO LEARN ALL THE TRUTHY AND FALSY VALUES 

//FALSY VALUES
//false,0,-0,bigInt(0n),"",null,undefined,NaN
//truthy values
//true,"0",'false'," ",[],{},function(){},


//if(userEmail.length===0){
    console.log("array is empty");
//}
const myObj = {}
if(Object.keys(myObj).length===0){
    console.log("object is empty");
}


//NULLISH COALESCING OPERATOR(??):NULL UNDEFINED
// let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? 10 ?? 20
// console.log(val1);
//TERNIARY OPERATOR 
condition ? true : false
//EXAMPLE OF TERNIARY OPERATOR 
const iceteaPrice = 200
iceteaPrice <=80 ? console.log("price is less than 80"): console.log("greater than  80")

 