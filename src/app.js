import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { auth } from "/src/firebaseConfig.js";

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import '/src/styles/style.css';
import { onAuthReady } from './authentication';

//--------------------------------------------------------------
// Custom global JS code (shared with all pages)can go here.
//--------------------------------------------------------------

// This is an example function. Replace it with your own logic.
function sayHello() {
  // TODO: implement your logic here
}

function hideLoginSignupButton() {
  const loginBtn = document.getElementsByClassName('loginBtn')

  onAuthReady(user => {
    if (user) {
      loginBtn.style.visibility = "hidden";
      return; 
    }
    
    loginBtn.style.visibility = "visible";
  })
}

hideLoginSignupButton()


document.addEventListener('DOMContentLoaded', sayHello);