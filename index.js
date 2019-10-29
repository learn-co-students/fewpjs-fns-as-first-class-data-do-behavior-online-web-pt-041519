/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  const timeInt = timeString.parseInt(timeString, 10);
  if (timeInt < 12) return "Good Morning";
  if (timeInt < 17) return "Good Afternoon";
  return "Good Evening";

}

function DisplayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
