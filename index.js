/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function  greet(time) {
  time  = parseInt(time, 10);
    if  (time < 12) {
      return  "Good Morning";
    }
    else if  (time <  17) {
      return "Good Afternoon";
    }
    else {
      return "Good Evening";
    }
}

/* Write your implementation of displayMessage() */

//update the text inside the #greeting node with the content of the first argument.

let text = "TEST";

function displayMessage(text) {
  let content  = document.getElementById('greeting');
  content.innerText = `${text}`;
}