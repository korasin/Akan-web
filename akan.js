function getDate(){
   console.log("date entered");
   return ("date entered");
}if (date<0){
   alert("invalid, enter another")
}else if(date>31){
   alert("invalid, enter another")
}  

function getMonth(){
    console.log("month entered");
}if (month<0){
    alert("invalid enter another")
}else if(month>12){
    alert("invalid enter another")
} 

function myDay(){
    console.log ("your name is" + date);
}if (day==0){
    console.log("sunday")
}else if(day==1){
    console.log("monday")
}else if(day==2){
    console.log("tuesday")
}else if(day==3){
    console.log("wednesday")
}else if(day==4){
    console.log("thursday")
}else if(day==5){
    console.log("friday")
}else (day==6);{
    console.log("saturday")
}
myDay();
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
onClick: function (event) {
    event.preventDefault();
    var field = event.target.name;
    alert("The name is : " + field);
}
