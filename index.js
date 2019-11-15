/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let x = time.split(':').join(' / ');
  let y = parseInt(x);
  if (y < 12) {
    greeting = "Good Morning";
  } else if (y > 17) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Afternoon";
  } 
  return greeting;
}

function displayMessage(string) {
  let g = document.querySelector("h1#greeting");
  g.innerText = string;
}