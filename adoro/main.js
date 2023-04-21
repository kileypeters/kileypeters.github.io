let currentMode = document.querySelector('.status-title');
let timer = document.querySelector('.display-1');
let modeBG = document.querySelector('.study-time');
let resetButton = document.querySelector('.fa-arrow-rotate-left');
let playButton = document.querySelector('.fa-play');
let pauseButton = document.querySelector('.fa-pause');

var minLen = 25;
var secLen = 0; 

var timeLen = (minLen * 60000) + (secLen * 1000) + new Date().getTime();

resetButton.addEventListener("click",()=>{
    timer.innerHTML = "25:00";
    updateDisplay();
}) ; 

playButton.addEventListener("click",()=>{
    
}) ; 

pauseButton.addEventListener("click",()=>{
    //Stop timer
    updateDisplay();
}) ; 

function updateDisplay(){
        
};


var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = timeLen - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.display-1').innerHTML = minutes + " : " + ('0'+seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "0 : 00";
  }
}, 1000);
