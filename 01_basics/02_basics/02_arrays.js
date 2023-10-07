const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[2]);
//THIS BELOW IS THE SPREAD OPERATOR //
 const all_new_heroes = [...marvel_heroes , ...dc_heroes]
 console.log(all_new_heroes);
const fake_array = [1,2,3,[4,5,6,[7,8,9]]]
const real_array = fake_array.flat(Infinity)
// console.log(real_array);
// console.log(Array.isArray("hansraj"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({name:"hansraj"}));//INTERESTING AND SPECIAL CASE 
// let score1 = 100
// let score2 = 200
// let score3 = 300
//console.log(Array.of(score1,score2,score3));


function han(num1){
    let a=5
    console.log(a);
    return a
}
han(5)
let a=10
console.log(a);

var A=10
function han1(num1){
    A=8
    console.log(A);
    return A
}
han1(A)
console.log(A);

