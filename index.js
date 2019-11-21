/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  var tsplit = timeString.split(':')[0]
  var t = parseInt(tsplit)
  if (t < 12) {
    return `Good Morning`;
  }
  else if ( t < 17 ) {
    return `Good Afternoon`;
  }
  else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(greet) {
  document.getElementById("greeting").innerText = greet;

}