//ARRAYS
const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","spiderman","naagraaj"]
//const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);
//ARRAY METHODS 
// myArr.push(7)//it add the last element in the array
// console.log(myArr);
// myArr.pop()//it remove the last element from the array 
//myArr.unshift(5)//THIS UNSHIFT METHOD ADD AN ELEMENT IN THE FIRST PLACE 
//myArr.shift()//THIS WILL REMOVE 5 FROM THE FIRST ELEMENT 
//myArr.shift()//THIS WILL ALSO REMOVE FIRST ELEMENT FROM THE FIRST POSITION FROM THE ORIGINAL ARRAY
// console.log(myArr);
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));
const newArray = myArr.join()
// console.log(newArray);
// console.log(myArr);


//SLICE & SPLICE

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

//splice
const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);


