///for of
//[{},{},{},{}]
const arr = [1,2,3,4,5]
for (const num  of arr) {
   // console.log(num);
}
const greeting = "hello.world!"
for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
}
//MAPS ALWAYS HAVE UNIQUE ENTRY
const map = new Map()
map.set("IN","India")
map.set("USA","united states of america")
map.set("FR","france")
//console.log(map);
for(const [Key,value] of map){
console.log(Key, "-:",value);
}
//OBJECT 
const myObject = {
IND:"India",
USA:"united states of america",
FR:"france"
}
// for (const  [key,value] of myObject) {
//    console.log(key, " : "value);             //THIS IS NOT RIGHT SYNTAX FOR for loop for getting key value pair 

// }
