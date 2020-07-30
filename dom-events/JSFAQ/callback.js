function callback(name,age,task){
    console.log('Hello' ,name);
    console.log('Your Age', age);
    washhand();
    takeshower();
    task();
}

function washhand(){
    console.log('wash hand your soap');
}

function takeshower(){
    console.log('Take Shower');
}
callback('Mahbub '  , 29 ,washhand);
callback('Rahman '  , 24 ,takeshower);