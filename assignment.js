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

woodCalculator(5, 8, 10);

//3.  brickCalculator

function brickCalculator(floor){
    let result;
    if(floor<=10){
        result=floor*15*1000;
    }else if(floor>=11 && floor<=20){
        result =10*15*1000+(floor-10)*12*1000;
    }
    else if( floor>=21){
        result =10*15*1000 + 10*12*1000 + (floor-20)*10*1000;
    }
   
    return result;
    
}
 console.log(brickCalculator(25));

 