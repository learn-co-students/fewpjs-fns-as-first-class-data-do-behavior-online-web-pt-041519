/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const timeSplit = timeString.split(":");
  const hours = parseInt(timeSplit[0], 10); 
  if (hours < 12) {
    return "Good Morning";
  } else if (hours == 12 || hours <= 17) {
    return "Good Afternoon";
  } else if (hours > 17) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(msg){
  let greeting = document.getElementById("greeting");
  greeting.innerText = msg;
}