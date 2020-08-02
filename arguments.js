function getFullName(firstname,lastname){

    console.log(arguments);
    let  fullname = '';
  
    for(let i = 0;i<arguments.length;i++){
        const namepart = arguments[i];
        fullname = fullname + ' ' + namepart;
    }
   // const fullname = firstname + ' ' + lastname;
    return fullname;
}
const name = getFullName('Mahbubur' ,'Rahman' ,'Runu', 'Shanta');
console.log(name);
