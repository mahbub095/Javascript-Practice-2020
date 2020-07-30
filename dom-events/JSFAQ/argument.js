function add(num1,num2){
   // console.log(arguments[3]);
    var sum = 0;
    for(let i=0;i<arguments.length;i++){
        const num = arguments[i];
      //  console.log(num);
      sum = sum +num;

    }
    return sum;
}
var result = add(5,5,6,7,8,9,);
console.log('result',result);