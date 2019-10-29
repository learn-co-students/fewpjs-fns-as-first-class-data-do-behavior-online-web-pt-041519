/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(time){

  let timee = parseInt(time, 10);
  
  if (timee < 12) return "Good Morning"
  if (timee > 17) return "Good Evening" 
  return "Good Afternoon"
}


/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}