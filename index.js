/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let input = parseInt(time.split(':')[0], 10);
  if (input < 12) {
    return 'Good Morning'
  } else if (input < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  const greetingEl = document.getElementById('greeting');
  greetingEl.innerText = str
}