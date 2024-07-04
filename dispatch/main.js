
function colorFunction() {
  document.getElementById("panic").style.backgroundColor = "orange";
}
function colorFunction2() {
  document.getElementById("panic").style.backgroundColor = "red";
}

function colorFunction3() {
  document.body.style.backgroundColor = "grey";
}
function colorFunction4() {
  document.getElementById("pactive").style.backgroundColor = "orange";
}
function colorFunction5() {
  document.getElementById("pactive").style.backgroundColor = "grey";
}
function colorFunction6() {
  document.getElementById("pactive").style.color = "black";
}
function colorFunction7() {
  document.getElementById("pactive").style.color = "grey";
}
function colorFunction8() {
  document.getElementById("signalactive").style.color = "red";
}
function colorFunction9() {
  document.getElementById("signalactive").style.color = "grey";
}
function colorFunction10() {
  document.getElementById("signalactive").style.backgroundColor = "red";
}
function colorFunction11() {
  document.getElementById("signalactive").style.color = "black";
}
function colorFunction12() {
  document.getElementById("signalactive").style.backgroundColor = "grey";
}
function colorFunction13() {
  document.getElementById("signalactive").style.backgroundColor = "red";
}

    var snd = new Audio("audio/emergency_button.wav");
    var snd2 = new Audio("audio/newcall.mp3");
    var snd3 = new Audio("audio/signal100.mp3");
    var snd4 = new Audio("audio/clear.mp3");
    
    const btn = document.getElementById('panic');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'red';


  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});


    
    function fun() {  
  

  alert ("Panic Buttion Pushed By: unit, At: street name/location, Nearest Postal: postal");  

}  

document.getElementById("statust").innerHTML = "Status: 10-42";


function change_text8(){
    document.getElementById("statust").innerHTML = "Status: 10-8";
}
function change_text7(){
    document.getElementById("statust").innerHTML = "Status: 10-7";
}
function change_text6(){
    document.getElementById("statust").innerHTML = "Status: 10-6";
}
function change_text41(){
    document.getElementById("statust").innerHTML = "Status: 10-41";
}
function change_text42(){
    document.getElementById("statust").innerHTML = "Status: 10-42";
}
function change_text23(){
    document.getElementById("statust").innerHTML = "Status: 10-23";
}
function change_text97(){
    document.getElementById("statust").innerHTML = "Status: 10-97";
}
function change_textcall(){
    document.getElementById("call").innerHTML = "New Call Assigned";
}
function change_textclear(){
    document.getElementById("call").innerHTML = "";
}


