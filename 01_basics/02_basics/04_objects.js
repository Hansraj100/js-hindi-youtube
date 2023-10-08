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
//console.log(Object.entries(users));

// OBJECT DESTRUCTURING 
const course = {
  courseName :"coding",
  price :"6k",
  courseInstructor:"hansraj"
}
// course.courseInstructor
const {courseInstructor:Instructor} = course 
//console.log(courseInstructor);
//REACTJS OBJECT DE STRUCTURING 
const navBar = ({company})=>{

}
navBar(company="hansraj")
console.log(company);

//JSON //DATA FETCH FROM BACKEND IN THE FORM OF XML IN EARLY DAYS BUT NOWADAYS IT FETCH IN THE FORM OF JSON
//JSON(javascript object notaion ,this is called json)
// 
// {
//   name:"hansraj",
//   courseName:"javascript",
//   price:"free"
// }
//APIs IN THE FORM OF ARRAY FORMAT
[
  {},
  {},
  {}
]
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}