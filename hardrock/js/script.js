const inputValue = document.getElementById('inputValue');
const button = document.getElementById('button');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');

button.addEventListener('click',function(){
fetch('https://api.lyrics.ovh/suggest/baby'+inputValue.value )
.then(res => res.json())
 .then(data =>{
     //json data
     const nameValue = data ['data'][0]['title_short'];
      

     //initial value
     cityName.innerHTML = nameValue;
     
   
     
 })
.catch( err => alert('Wrong Search you try!'))
})