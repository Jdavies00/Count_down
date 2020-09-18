

var greatScott= document.getElementById("button");


greatScott.addEventListener("click",function(){


var tHours= document.getElementById("hours").value;
var tMinutes= document.getElementById("minutes").value;
var tSeconds= document.getElementById("seconds").value;

var TotalCurrentTime = new Date().getTime();
TotalCurrentTime = TotalCurrentTime + (1000 * tSeconds) +(1000 * 60 * tMinutes)+ (1000 * 60 * 60 * tHours);
    
var refesh =setInterval(finalCountDown, 1000);

function finalCountDown(){
    let rightNow = new Date().getTime();
    let CountTime = TotalCurrentTime - rightNow;

    let countHours = Math.floor((CountTime/(1000 * 60 * 60)));
    let countMinutes = Math.floor((CountTime % (1000 * 60 * 60)) / (1000 * 60));
    let countSeconds = Math.floor((CountTime % (1000 * 60 )) / 1000);

    if (countHours < 10){
        countHours = "0" + countHours;
    }
    if (countMinutes < 10){
        countMinutes = "0" + countMinutes;
    }
    if (countSeconds < 10){
        countSeconds = "0" + countSeconds;
    }
    let display = countHours + ":" + countMinutes + ":" + countSeconds;
    document.getElementById("countOnMe").innerHTML = display;
    
    if (CountTime < 0){
        clearInterval(finalCountDown);
        document.getElementById("countOnMe").innerHTML = "OUTATIME"
    }

  }

finalCountDown();

})