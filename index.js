/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
    let hourNow = parseInt(time.split(':'));
    let greeting; 
    //Display the appropriate greeting based on the current time.
    if (hourNow > 18) {
      greeting  = 'Good Evening';
    } else if (hourNow > 12) {
      greeting = 'Good Afternoon';
    }else {
      greeting = 'Good Morning';
    }
    return greeting;

};

function displayMessage(message) {
  let greeting = document.getElementById('greeting').innerText = message
}
