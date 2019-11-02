/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  let hour = parseInt(string.split(':')[0], 10)
  if (hour < 12) {
    return "Good Morning"
  }
  if (hour > 12 && hour < 15) {
    return "Good Afternoon"
  }
  return "Good Evening"
  
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}