/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Return greeting given 24-hr input time */
function greet(timeString) {
  // Convert time to number
  const hour = parseInt(timeString, 10);

  // Return error if not 24-hr time
  if (hour < 0 || hour > 24) { return "Time isn't valid";}
  
  // Return greeting from number
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}


/* Replace greeting text with input */
function displayMessage(newGreeting) {
  document.getElementById("greeting").innerText = newGreeting;
}