/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let hours = time.split(":")
  let phours = parseInt(hours[0], 10)
    if (phours < 12) {
      return "Good Morning"
    }
    if (phours > 17) {
      return "Good Evening"
    }
    else {
      return "Good Afternoon"
    }
}

function displayMessage(str){
  document.getElementById('greeting').innerText = str
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
