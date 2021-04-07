// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const errorModal = document.getElementById("modal")
errorModal.className = "hidden"
const heartButtons = document.querySelectorAll(".like")


for (const button of heartButtons){
  button.addEventListener("click", handleClick)
}

function handleClick(e){
  if (e.target.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(resp => {
      e.target.innerText = FULL_HEART
      e.target.className = "activated-heart"
      //debugger
    })
    .catch(error => {
      errorModal.className = ""
      errorModal.innerText = error
      setTimeout(()=> errorModal.className = "hidden",  5000)
    })
  }
    if (e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART
      e.target.className = ""
  }
}

// When a user clicks on a full heart
  // Change the heart back to an empty heart

  // Remove the .activated-heart class


// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
// Only manipulate the DOM once the server requests respond. Do not make the heart full until you're inside a successful .then block.

// > Note: The tests will only check for the first part of the specification (adding the hidden class). You should verify the rest of the behavior yourself, by checking the page in the browser.
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


