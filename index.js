/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let hr = parseInt(time.split(':')[0])
  if(hr < 12){
    return "Good Morning"
  }else if(hr <= 17){
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
}

function displayMessage(msg){
  let greeting = document.querySelector("#greeting")
  greeting.innerText = msg
}
