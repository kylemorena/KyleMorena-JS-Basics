//Variables
const counterDisplay = document.querySelector(".counter-display");
const plusButton = document.querySelector(".plus-button")
const minusButton = document.querySelector(".minus-button")
const startButton = document.querySelector(".start-button")
const stopButton = document.querySelector(".stop-button")
const resetButton = document.querySelector(".reset-button")

let count = 0;
let myInterval;
let active = false;

function counter(myVar){
  switch (myVar){
    case 'start':
      myInterval = setInterval(myTimer,1000);
      function myTimer(){
          count++;
          counterDisplay.innerHTML = count;
          active = true;
      }
      break;
    case 'stop':
      clearInterval(myInterval)
      counterDisplay.innerHTML = count;
      active = false;
      break;
    case 'reset':
      clearInterval(myInterval)
      count = 0;
      active = false;
      break;
    default: 
      count = count + myVar;
      break;
  }
  counterDisplay.innerHTML = count;
}

plusButton.addEventListener("click",function() {
  counter(+1);
});
minusButton.addEventListener("click",function() {
  counter(-1);
});
startButton.addEventListener("click",function() {
  if(active==false)
  {
    counter("start")
  }
  else{
    alert('è già in play, clicca su pause o reset')
  }
});
stopButton.addEventListener("click",function() {
  counter("stop")
});
resetButton.addEventListener("click",function() {
  counter("reset")
});
