// var marks = [45,81,63,98,56,35,23];
// //var max = marks[0];
// var sum =0;
// for(var i= 0;i<marks.length;i++){
//     var element =marks[i];
//     sum = sum+element;
//     // if(element>max){
//     //     max=element;
//     // }
// }
// console.log(sum);


// var marks = [45,81,63,98,56,35,23];
// function getSumArray(marks){
//     var sum =0;
// for(var i= 0;i<marks.length;i++){
//     var element =marks[i];
//     sum = sum+element;
//     // if(element>max){
//     //     max=element;
//     // }
// }
//     return sum;
 
// }
// console.log(sum);

var mark = [45,56,77,88,99,111];
var max = mark[0];
for(var i=0; i<mark.length;i++){
    var element =mark[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest Value : ", max);