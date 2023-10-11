//reduce  method in js
const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},3)
console.log(myTotal);