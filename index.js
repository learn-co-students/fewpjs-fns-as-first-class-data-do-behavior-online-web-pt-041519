/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let array_words = time.split(':');
  let parsed = parseInt(array_words[0]);
  if (parsed < 12) {
    return 'Good Morning';
  }
  else if (parsed > 12 && parsed < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(content) {
  document.getElementById("greeting").innerText = content 
}