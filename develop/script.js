var currentDay=document.getElementById("currentDay")
var todaysDate=moment().format('MMM DD, YYYY');
var currentTime=moment().format('h A');
var timeBlock=document.querySelector(".time-block");
var timeBlockText=document.querySelector("textarea")
var hour=document.querySelectorAll(".hour");
var time=document.getElementById("time");
var time9=document.getElementById("time9");
var time10=document.getElementById("time10");
var time11=document.getElementById("time11");
var time12=document.getElementById("time12");
var time1=document.getElementById("time1");
var time2=document.getElementById("time2");
var time3=document.getElementById("time3");
var time4=document.getElementById("time4");
var time5=document.getElementById("time5");
var saveButtton=document.getElementById("saveButton");
var newEvent="";


console.log(currentDay);
console.log(currentTime);

function showTodaysDate(){
    currentDay.innerHTML=(todaysDate);
}


function setTimeBlocks(){
            time9.innerHTML=moment().set("hour", 9).format("h A")
            time10.innerHTML=moment().set("hour", 10).format("h A");
            time11.innerHTML=moment().set("hour", 11).format("h A");
            time12.innerHTML=moment().set("hour", 12).format("h A");
            time1.innerHTML=moment().set("hour", 1).format("h A");
            time2.innerHTML=moment().set("hour", 2).format("h A");
            time3.innerHTML=moment().set("hour", 3).format("h A");
            time4.innerHTML=moment().set("hour", 4).format("h A");
            time5.innerHTML=moment().set("hour", 5).format("h A");
        console.log(hour);
    


     //if hour is current time set to present
     if (moment(currentTime, "h A").isBefore(hour, "h A")){
         $(timeBlockText).addClass("past");
     }
     else if (hour === moment(currentTime, "h A")){
        $(timeBlockText).addClass("present");
    }
    //if hour is later than current time set to future
     else {
       $(timeBlockText).addClass("future");
    }
    //if hour is earlier than current time, set to past
    
    //create calendar event
  //  function createEvent(){
    //    newEvent.innerHTML=(timeBlockText);
    //}
    
    //save calendar event
      //  function saveEvent(){
           
        //        localStorage.setItem(newEvent, JSON.stringify(newEvent))

          //      console.log(newEvent);
        //}
        
    
    }
 //saveButtton.addEventListener('click', saveEvent);   
showTodaysDate();
setTimeBlocks();
