//MAP IN JAVASCRIPT 
const myNumbers= [1,2,3,4,5,]
const mynumbers = myNumbers.map((num)=>num + 10)
//console.log(mynumbers); 
//chaining in js
 const newnums = mynumbers
 .map((num)=>num*10)
 .map((num)=>num +1) 
 .filter((num)=>num>=40)
 console.log(newnums);