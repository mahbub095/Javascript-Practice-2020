function welComeGuest(name , greetHandler){
   // console.log(name);
   greetHandler(name);
}
const actorName = 'Mahbub';

function greetMorning(name){
    console.log('Good Morning',name);
}


welComeGuest (actorName,greetMorning);