const name = "hansraj"
const repoCount = 50
// console.log(name + repoCount);
// console.log(`hello , my name is ${name} and my repo count is ${repoCount} `)
//DECLARING STRING IN JAVA SCRIPT and GETTING VALUE USING KEYS AND GETTING LENGTH AND PROTOTYPE
const gameName = new String('hansraj-panwar')
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('h'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
const newStringOne = ("       hansraj")
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "www.hansraj-20%hansrajpanwar"
console.log(url.replace('20','50%'))
console.log(url.includes('hansraj'));
console.log(gameName.split('-'));