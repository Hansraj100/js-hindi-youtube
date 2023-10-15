const  marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash "]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
// THE ABOVE OUTPUT COULD CREATE ARRAY INSIDE AN ARRAY
const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);//THIS WILL ALSO GIVE ARRAY INSIDE AN ARRAY

// SPREAD OPERATOR 
const all_new_heros = [...marvel_heros,...dc_heros]