$(document).ready(function() {

});

// check for saved 'darkSide' in localStorage
let darkSide = localStorage.getItem('darkSide'); 

const darkSideToggle = document.querySelector('#dark-side-toggle');

const enableDarkSide = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkside');
  // 2. Update darkSide in localStorage
  localStorage.setItem('darkSide', 'enabled');
}

const disableDarkSide = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkside');
  // 2. Update darkSide in localStorage 
  localStorage.setItem('darkSide', null);
}
 
// If the user already visited and enabled darkSide
// start things off with it on
if (darkSide === 'enabled') {
  enableDarkSide();
}

// When someone clicks the button
darkSideToggle.addEventListener('click', () => {
  // get their darkSide setting
  darkSide = localStorage.getItem('darkSide'); 
  
  // if it not current enabled, enable it
  if (darkSide !== 'enabled') {
    enableDarkSide();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkSide(); 
  }
});