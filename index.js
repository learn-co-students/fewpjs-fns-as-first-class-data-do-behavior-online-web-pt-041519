/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {

  let time = string.split(':')
  let integer = parseInt(time, 10)
   if (integer <= 12 ) {
     return "Good Morning"
   }
   if (integer >= 17) {
     return "Good Evening"
   }

   return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
let string = "TEST"
function displayMessage(string) {
    let el = document.getElementById("greeting")
    el.innerText = string
}
