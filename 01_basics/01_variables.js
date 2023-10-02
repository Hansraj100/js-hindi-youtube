const accountId = 2001330100116
let accountGmail = "hansrajpanwar100@gmail.com"
var accountPassword = "123456789"
accountCity = "shamli"
// accountId = 300110001017
/* prefer not to use var because of issue in block scope and functional scope*/
console.log(accountId);
accountGmail = "hans100@accountGmail.com"
accountPassword = "12345"
accountCity = "Karnal"
let accountState;
console.table([accountGmail,accountPassword,accountCity,accountState])
