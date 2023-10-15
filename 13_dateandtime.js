 //DATES
 let myDate = new Date()
 console.log(myDate);//output is sun oct 15 20:12:11  GMT+0530(Indian Standard Time)
 console.log(myDate.toString());//output is sun oct 15 20:12:11  GMT+0530(Indian Standard Time)
 console.log(myDate.toDateString());//output is sun oct 15 2023
 console.log(myDate.toLocaleString());////output is  10/15/2023, 8:17:35 PM
 console.log(typeof myDate);//output is Object 

 let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);//output is mon jan 23 2023 00:00:00 GMT+0530(Indian Standard Time)
console.log(myCreatedDate.toDateString());//output is mon jan 23 2023
let myCreatedDate2 = new Date("2023-01-14")//output is  1/14/2023, 12.00:00PM

//time stamps in js 
 let myTimeStamp = Date.now()
console.log(myTimeStamp);//output is 1697382130198// it is the milliseconds from 1970 date 
console.log(myCreatedDate.getTime());//output is 1674412200000
console.log(Math.floor(Date.now()/1000));//output is 1697382590


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());// output is 9
console.log(newDate.getDay());//output is 0


newDate.toLocaleString('default',{
    weekday:"long"
})
 





