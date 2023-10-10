//for (here variable is index , we can also change variable name )
for(let index = 0;index<=10;index++){
    const element = index;
    if(index==5){
        // console.log("5 is the best number");   
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
   // console.log(`inner loop value: ${j} and inner loop ${j}`); 
   //console.log( i+"*"+ j + "=" + i *j );
    }
}
//LOOP ON ARRAY
let myArray = ["flash","batman","superman"]
//console.log(myArray.length);
for(index = 0 ; index< myArray.length;index++){
    const element = myArray[index];
    //console.log(element);
}
//BREAK AND CONTINUE
for(index = 1;index<=20;index++){
    if(index==5){
        console.log("detected 5");
        break
    }
    const element = Array[index];
    console.log(`value of i is ${index}`)
}   
for(index = 1;index<=20;index++){
    if(index==5){
        console.log("detected 5");
        continue
    }
    const element = Array[index];
    console.log(`value of i is ${index}`)
}   







