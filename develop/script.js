var currentDay=document.getElementById("currentDay")
var todaysDate=moment().format('dddd, MMMM Do, YYYY');
var currentTime=moment().format("h A");
var timeBlock=document.querySelector(".time-block");
var saveButtton=document.getElementById("saveButton");
var newEvent="";
var textArea9=document.getElementById("textArea9");
var textArea10=document.getElementById("textArea10");
var textArea11=document.getElementById("textArea11");
var textArea12=document.getElementById("textArea12");
var textArea1=document.getElementById("textArea1");
var textArea2=document.getElementById("textArea2");
var textArea3=document.getElementById("textArea3");
var textArea4=document.getElementById("textArea4");
var textArea5=document.getElementById("textArea5");
var time9=moment().set('hour',9).format("h A");
var time10=moment().set('hour',10).format("h A");
var time11=moment().set('hour',11).format("h A");
var time12=moment().set('hour',12).format("h A");
var time1=moment().set('hour',13).format("h A");
var time2=moment().set('hour',14).format("h A");
var time3=moment().set('hour',15).format("h A");
var time4=moment().set('hour',16).format("h A");
var time5=moment().set('hour',17).format("h A");



//show today's date
function showTodaysDate(){
    currentDay.innerHTML=(todaysDate);
}
    

     //color code time blocks based on past, present, future
     if (currentTime > time9){
      $("#textArea9").addClass("future");
  }
     else if (time9 === currentTime){
       $("#textArea9").addClass("present");
   }
   else {
       $("#textArea9").addClass("past");
   }


     if (currentTime > time10){
         $("#textArea10").addClass("past");
     }
     else if (time10 === currentTime){
        $("#textArea10").addClass("present");
    }
    else {
        $("#textArea10").addClass("future");
    }

    if (currentTime > time11){
        $("#textArea11").addClass("past");
    }
    else if (time11 === currentTime){
       $("#textArea11").addClass("present");
   }
   else {
       $("#textArea11").addClass("future");
   }


   if (currentTime > time12){
    $("#textArea12").addClass("past");
}
    else if (time12 === currentTime){
   $("#textArea12").addClass("present");
}
    else {
   $("#textArea12").addClass("future");
};
if (currentTime > time1){
 $("#textArea1").addClass("past");
}
else if (time1 === currentTime){
   $("#textArea1").addClass("present");
}
else {
   $("#textArea1").addClass("future");
};
if (currentTime > time2){
    $("#textArea2").addClass("past");
}
else if (time2 === currentTime){
   $("#textArea2").addClass("present");
}
else {
   $("#textArea2").addClass("future");
};
if (currentTime > time3){
    $("#textArea3").addClass("past");
}
else if (time3 === currentTime){
   $("#textArea3").addClass("present");
}
else {
   $("#textArea3").addClass("future");
};
if (currentTime > time4){
    $("#textArea4").addClass("past");
}
else if (time4 === currentTime){
   $("#textArea4").addClass("present");
}
else {
   $("#textArea4").addClass("future");
};
if (currentTime > time5){
    $("#textArea5").addClass("past");
}
else if (time5 === currentTime){
   $("#textArea5").addClass("present");
}
else {
   $("#textArea5").addClass("future");
}

function saveEvent(){
  var newEvent9=textArea9.value;
  var newEvent10=textArea10.value;
  var newEvent11=textArea11.value;
  var newEvent12=textArea12.value;
  var newEvent1=textArea1.value;
  var newEvent2=textArea2.value;
  var newEvent3=textArea3.value;
  var newEvent4=textArea4.value;
  var newEvent5=textArea5.value;

    localStorage.setItem('event', JSON.stringify(newEvent9));
    localStorage.setItem('event', JSON.stringify(newEvent10));
    localStorage.setItem('event', JSON.stringify(newEvent11));
    localStorage.setItem('event', JSON.stringify(newEvent12));
    localStorage.setItem('event', JSON.stringify(newEvent1));
    localStorage.setItem('event', JSON.stringify(newEvent2));
    localStorage.setItem('event', JSON.stringify(newEvent3));
    localStorage.setItem('event', JSON.stringify(newEvent4));
    localStorage.setItem('event', JSON.stringify(newEvent5));

  }


    
saveButtton.addEventListener("click", saveEvent);
showTodaysDate();
saveEvent();
