//constructor
// Object.creat(THIS IS CONSTRUCTOR)
//DECLARING A SYMBOL IN JS
const mySym = Symbol("key1")
//object LITERALS
const jsUser = {
    name:"hansraj",
    age:23,
    [mySym]:"myKey1",
    isLoggedin:false,
    email:"hansrajpanwar100@gmail.com",
    loggedIndays:["monday","tuesday","wednesday","thursday"]
}
// console.log(jsUser.email);
//SQUARE NOTATION METHOD FOR OBJECTS 
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
jsUser.email = "vanshrajpanwar100@gmail.com"
// console.log(jsUser.email);
//Object.freeze(jsUser)
jsUser.email = "jagmohanpanwar100@gmail.com"
// console.log(jsUser[mySym]);


//ADDING FUNCTIONS adding greeting function in object jsUser
jsUser.greeting = function(){
console.log("hello js users")
}
console.log(jsUser.greeting());
jsUser.greeting2 = function(){
    console.log(`hello js users,${this.name}`);
    }
console.log(jsUser.greeting2());