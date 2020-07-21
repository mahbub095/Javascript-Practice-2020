//1. feetToMile
function feetToMile(num){
var result=num*0.00018939;
 return result;
}
var mile =feetToMile(20)
console.log("FeetToMile Result : " + mile);


//2.woodCalculator

function woodCalculator(chair, table, bed) {
    
    totalWood = (chair * 1) + (table * 3) + (bed * 5);
    console.log("Total wood needed : " + totalWood);
}
//! Output check
woodCalculator(5, 8, 10);