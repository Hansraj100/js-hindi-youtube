// const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach((item) =>{
// //console.log(item);
// return item
// })
// console.log(values);
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((nums) =>nums>4)//HERE IF WE USE PARENTHESIS THEN IT WILL GIVE EMPTY ARRAY BCZ IT ACT LIKE A SCOPE AND WE HAVE TO CODE return TO GET DESIRED OUTPUT
// console.log(newNums);
//NOW WE WILL SE HOW SAME EXAMPLE CAN BE USED IN FOR EACH 
 const newNums = []
 myNums.forEach((nums) => {
    if(nums>4){
        newNums.push(nums)
    }
 });
//console.log(newNums);