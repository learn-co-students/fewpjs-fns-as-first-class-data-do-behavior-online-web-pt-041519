/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hour = parseInt(time, 10)
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  if (hour < 17) return "Good Afternoon"
}
function displayMessage(msg){
  let greeting = document.querySelector("#greeting")
  greeting.innerText = msg
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


/*If the time is earlier than 12pm, return "Good Morning".
If the time is between 12pm and 5pm, return "Good Afternoon".
If the time is later than 5pm, return "Good Evening".
NOTE: The value returned from the <input> will be of type String. You’ll need to take the String of the 24 hour time and covert it to a number. The split() function and the parseInt() functions should help.
*/