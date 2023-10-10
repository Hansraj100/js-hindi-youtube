//BASIC SYNTAX OF SWITCH 
// switch(Key){
//     case value : 

//     break;

//      default: 
//      break;
// }
const month = 3
switch(month){
case 1:
    console.log("january");
    break;
case 2:
    console.log("feburary");
    break;
case 3:
    console.log("march");
    break;
case 4:
    console.log("april");
    break;
case 5:
    console.log("may");
    break;
    default:
        console.log("Default case match");
     break;
}
//match string in a switch 
const mahina  = "march" 
switch(mahina){
    case "january" :
        console.log("january");
        break;
    case "feburary":
        console.log("feburary");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
        default:
            console.log("Default month match");
            break;
}
