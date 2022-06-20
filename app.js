let time=document.querySelector('#time');
let wrapper=document.querySelector('#wrapper'); 

wrapper.addEventListener('onload',getDate(), false)


//setting AM and PM













//parse days to string
function getWeekName(name) {
    switch(name) {
        case 1: return "Monday";
        break;
        case 2: return "Tuesday";
        break;
        case 3: return "Wednesday";
        break;
        case 4: return "Thursday";
        break;
        case 5: return "Friday";
        break;
        case 6: return "Saturday";
        break;
        case 0: return "Sunday";
        break;
    }
}

function getDate() {
    const setDate=new Date();
    let hours= setDate.getHours();
   let mins= setDate.getMinutes();
   let secs= setDate.getSeconds();
   let days= setDate.getDay();

   time.innerHTML=
   `<div>${hours}::${mins}:: ${secs} </div>`

 day.innerHTML=
 `<div>${getWeekName(days)}</div>`       
}

