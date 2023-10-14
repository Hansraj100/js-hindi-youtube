//*********************************************************/
// stack(primitive)-this creates the copy of the declared variable ,heap(Non primitive )-this does not create  copy of declared variable and the change we make will be changed in the original value 

// example of stack memory 
let myyoutubename = "hansraj"
let anothername = myyoutubename
// console.log(anothername);//output is hansraj
anothername = "chai aur code "
console.log(myyoutubename);//output is hansraj
console.log(anothername);//output is chai aur code 
// HEAP MEMORY 
let userone = {
    email:"hansrajpanwar100@gmail.com",
    upi:"hans@ybl"
}
let usertwo = userone
usertwo.email = "vanshraj@gmail.com"

console.log(userone.email);//output is vanshraj@gmail.com
console.log(usertwo.email);//output is vanshraj@gmail.com