const myObject = {
    js:"javascript",
    cpp:"c plus plus",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
//console.log(`${key} shortcut for ${myObject[key]}`);
}

//USING FOR IN LOOP ON ARRAYS
const programming = ["python","js","cpp","java"]
for (const key in programming) {
    console.log(programming[key]);   
}
//WE CAN NOT USE FOR IN LOOP ON MAPS BECAUSE IT IS NOT ITERATABLE