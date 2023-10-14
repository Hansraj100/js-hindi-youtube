 console.log(2>1);//true
 console.log(2>=1);//true
 console.log(2<1);//false
 console.log(2==1);//false
 console.log(2!=1);//true
 //but the problem arises here when the datatypes are different
 console.log("2">1);
 console.log("02">1);
 ///ABOVE THIS JAVASCRIPT AUTOMATICCALLY CONVERT STRING INTO NUMBERS 
  //in below cases we get unexpected result because of comparision of different datatypes 
  console.log(null>0);//false 
  console.log(null==0);//false 
  console.log(null>=0);//true because it convert the null into 0 here 
  //now comparision of undefined 
  console.log(undefined==0);6//false 
  console.log(undefined>0);//false
  console.log(undefined<0);//false
  // ===(this triple qual also check value and datatypes )
  console.log("2"===2);//false
  