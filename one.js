// investigation study
const accountId = 123456789
let accountEmail = "hansrajpanwar100@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"//we can also reserve memory in js in this we .this is declaring variable without keyword.
let accountState;//in javascript if we declare a variable and dont put value in that variable then it will give us UNDEFINED
// accountId = 2
console.log(accountId); // ASSIGNMENT TO CONSTANT VARIABLE . WE CAN NOT ASSIGN VALUE TO THE CONSTANT AGAIN
/*prefer not to use var because of issue in block scope and functional scope */
accountEmail = "vanshrajpanwar100@gmail.com"
accountPassword = "5322"
accountCity = "mumbai"
//now we have to print lot of variables which is hard bcz they are about 4,5 variables.so we use console.table([a,b,c]);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);