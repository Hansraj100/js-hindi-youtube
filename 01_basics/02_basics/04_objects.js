//using sinleton 
//const tinderUser = new Object()
//non singleton
// const tinderUser = {}
// console.log(tinderUser);
// tinderUser.id = "hansraj@123"
// tinderUser.name = "hansraj"
// tinderUser.isLoggedIn = false
//console.log(tinderUser);
const regularUser = {
email:"hansrajpanwar100@gmail.com",
fullName : {
    userFullName : {
    firstName:"hansraj panwar",
    lastName:"singh"
    }
  }
}
//console.log(regularUser.firstName);//UNDEFINE Q ARAAAAAAAAAAA ###############################################################################################################################################################################################################################################################
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
//const obj3 = Object.assign({},obj1,obj2)//{} IT IS TARGET 
// console.log(obj3);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users= [{
    email:"hansrajpanwar100@gmail.com",
    fullName : {
        userFullName : {
        firstName:"hansraj panwar",
        lastName:"singh"
        }
      }
    },
    {

    },
    {

    }
]
users[1].email
//console.log(users);
//console.log(Object.keys(users));
// console.log(Object.values(users));
console.log(Object.entries(users));