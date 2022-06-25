
function tick () {
    getDate();
    setInterval(getDate, 1000);
}

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

   //setting AM and PM
   let ap = "AM";
   if (hours > 12) {
       hours = hours - 12;
       ap = "PM";
   }
   if (hours === 0) {
       hours = 12;
   }
   // Adding zeroes
   if (secs < 10) {
       secs = "0" + secs;
   }
   if (hours < 10) {
       hours = "0" + hours;
   }
   if (mins < 10) {
       mins = "0" + mins;
   }


   time.innerHTML=hours + ":" + mins + ":" + secs+" "+ap

 day.innerHTML=getWeekName(days)       
}

