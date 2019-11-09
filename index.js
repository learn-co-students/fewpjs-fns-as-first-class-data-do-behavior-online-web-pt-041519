/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let time = string.split(":")[0]
  let hours = parseInt(time)
    if(hours < 12){
      return "Good Morning"
    }else if(hours > 12 && hours < 17){
      return "Good Afternoon"
    }else if(hours > 17){
      return "Good Evening"
    }else{
      return `${string}`
    }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let phrase = greet(string)
  // let greeting = document.querySelector('h1#greeting')
  document.getElementById('greeting').innerText = `${phrase}`
}

