const myArr = [1,2,3,4,5]
console.log(myArr[0]);//output is 1
//javascript arrays are resizable 
//javascript arrays can be mix of datatypes like objects , boolean,functions or arrays in array
//javascript arrays elements can not be accessed using arbitary strings as indexes
//javascript arrays are zero indexed 
//javascript array copy operation create SHALLOW COPIES rather than deep copies 
//**A SHALLOW COPY OF AN OBJECT IS A COPY WHOSE PROPERTIES SHARE THE SHAME REFERENCE AS THOSE OF THE SOURCE OBJECT FROM WHICH THE COPY WAS MADE*****/
//DEEP COPIES - a deep copy of an object is a copy whose properties do not share the same reference 
//In console there is a prototype excess where length property is given 
const myHeroes = ["shaktimaan","spiderman"]
// another way to declare an array
const myArr2 = new Array(1,2,3,4,5)


// arrays methods 
myArr.push(6)//this method add an element to the array
console.log(myArr);//output is [1,2,3,4,5,6]
myArr.pop(6)//this pop method will remove an element from an array
console.log(myArr);//output is [1,2,3,4,5]
//unshift method 
myArr.unshift(9)//this will add 9 in the first place of an array
console.log(myArr);//output is [9,1,2,3,4,5]
//but this unshift is ver complex and time taking because it can shift each index
//shift method
myArr.shift()//this will remove the element from the first place of an array
console.log(myArr);//output is [1,2,3,4,5]
//SOME QUESTIONAIRE METHODS IN JS WHICH ANSWER IN THE FORM OF TRUE AND FALSE
console.log(myArr.includes(9));//output is false
console.log(myArr.indexOf(9));//output is -1 when means not available 

const newArr = myArr.join()//this join method convert an array data type into a string
console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));//output is string

//slice and splice methods in js
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
//above output is A [1,2,3,4,5]
                    [2,3]
                    [1,2,3,4,5]
//splice
const myn2 = myArr.splice(1,3)
 console.log(myn2);                  