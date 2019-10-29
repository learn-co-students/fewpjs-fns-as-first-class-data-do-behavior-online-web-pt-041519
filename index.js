/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeNow = parseInt(time.split(':'))
  if ( timeNow < 12 ) {
    return "Good Morning";
  } else if ( timeNow - 12 > 5 ) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}


function displayMessage(text) {
  let content = document.getElementById("greeting")
    content.innerText = text;
}
